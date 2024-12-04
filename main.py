import os
from typing import Any, Iterator, Optional

from flask import Flask, Response, redirect, render_template, request, url_for
from flask_sqlalchemy import SQLAlchemy

app: Flask = Flask(__name__)
db_path: str = os.path.join(os.getcwd(), "orders.db")
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + db_path
db: SQLAlchemy = SQLAlchemy(app)


class Order(db.Model):
    """
    SQLAlchemy model representing a restaurant order.

    Attributes:
        id (int): Primary key for the order
        customer_name (str): Name of the customer placing the order
        table_number (int): Table number where the order was placed
        orders (str): Text description of the items ordered
    """

    id: int = db.Column(db.Integer, primary_key=True)
    customer_name: str = db.Column(db.String(128), nullable=False)
    table_number: int = db.Column(db.Integer, nullable=False)
    orders: str = db.Column(db.Text, nullable=False)

    def __iter__(self) -> Iterator[tuple[str, Any]]:
        """
        Allows conversion of the Order object to a dictionary using dict(order).

        Yields:
            tuple[str, Any]: Key-value pairs for each attribute of the order
        """
        yield "id", self.id
        yield "customer_name", self.customer_name
        yield "table_number", self.table_number
        yield "orders", self.orders


# Create database tables
with app.app_context():
    db.create_all()


@app.route("/<int:table_number>")
def main_menu(table_number: int) -> str:
    """
    Display the main menu for a specific table.

    Args:
        table_number (int): The table number requesting the menu

    Returns:
        str: Rendered HTML template for the main menu
    """
    return render_template("main_menu.html", table_number=table_number)


@app.route("/order/<int:table_number>", methods=["POST"])
def place_order(table_number: int) -> str:
    """
    Handle the submission of a new order for a specific table.

    Args:
        table_number (int): The table number placing the order

    Returns:
        str: Rendered HTML template showing the order summary
    """
    order: Order = Order(
        customer_name=request.form.get("customer_name"),
        table_number=table_number,
        orders=request.form.get("order_summary"),
    )
    try:
        db.session.add(order)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return f"Error placing order: {e}", 500

    return render_template(
        "order_summary.html",
        customer_name=order.customer_name,
        table_number=table_number,
        order_summary=order.orders,
    )


@app.route("/kitchen/")
def kitchen() -> str:
    """
    Display all current orders in the kitchen view.

    Returns:
        str: Rendered HTML template showing all active orders
    """
    orders: list[Order] = Order.query.all()
    orders_list: list[dict[str, Optional[str | int]]] = [
        dict(order) for order in orders
    ]
    return render_template("kitchen.html", orders=orders_list)


@app.route("/delete/<int:id>")
def delete_order(id: int) -> Response:
    """
    Delete a specific order from the system.

    Args:
        id (int): The ID of the order to delete

    Returns:
        Response: Redirect to the kitchen view after deleting the order
    """
    order: Order = Order.query.get_or_404(id)
    try:
        db.session.delete(order)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return Response(f"Error deleting order: {e}", status=500)
    return redirect(url_for("kitchen"))


if __name__ == "__main__":
    app.run(debug=True)
