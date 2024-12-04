window.addEventListener("load", setup);

function setup() {
    retrieve_DOM_references();
    set_event_listeners();
}

function retrieve_DOM_references() {
    akami_less_reference = document.getElementById("akami_less");
    akami_more_reference = document.getElementById("akami_more");
    akami_order_reference = document.getElementById("akami_order");

    shiromi_less_reference = document.getElementById("shiromi_less");
    shiromi_more_reference = document.getElementById("shiromi_more");
    shiromi_order_reference = document.getElementById("shiromi_order");

    hikarimono_less_reference = document.getElementById("hikarimono_less");
    hikarimono_more_reference = document.getElementById("hikarimono_more");
    hikarimono_order_reference = document.getElementById("hikarimono_order");

    ebi_less_reference = document.getElementById("ebi_less");
    ebi_more_reference = document.getElementById("ebi_more");
    ebi_order_reference = document.getElementById("ebi_order");

    hosomaki_less_reference = document.getElementById("hosomaki_less");
    hosomaki_more_reference = document.getElementById("hosomaki_more");
    hosomaki_order_reference = document.getElementById("hosomaki_order");

    temaki_less_reference = document.getElementById("temaki_less");
    temaki_more_reference = document.getElementById("temaki_more");
    temaki_order_reference = document.getElementById("temaki_order");

    oshizushi_less_reference = document.getElementById("oshizushi_less");
    oshizushi_more_reference = document.getElementById("oshizushi_more");
    oshizushi_order_reference = document.getElementById("oshizushi_order");

    futomaki_less_reference = document.getElementById("futomaki_less");
    futomaki_more_reference = document.getElementById("futomaki_more");
    futomaki_order_reference = document.getElementById("futomaki_order");

    ikura_less_reference = document.getElementById("ikura_less");
    ikura_more_reference = document.getElementById("ikura_more");
    ikura_order_reference = document.getElementById("ikura_order");

    tobiko_less_reference = document.getElementById("tobiko_less");
    tobiko_more_reference = document.getElementById("tobiko_more");
    tobiko_order_reference = document.getElementById("tobiko_order");

    kazunoko_less_reference = document.getElementById("kazunoko_less");
    kazunoko_more_reference = document.getElementById("kazunoko_more");
    kazunoko_order_reference = document.getElementById("kazunoko_order");

    uni_less_reference = document.getElementById("uni_less");
    uni_more_reference = document.getElementById("uni_more");
    uni_order_reference = document.getElementById("uni_order");

    tokyo_style_less_reference = document.getElementById("tokyo_style_less");
    tokyo_style_more_reference = document.getElementById("tokyo_style_more");
    tokyo_style_order_reference = document.getElementById("tokyo_style_order");

    kansai_style_less_reference = document.getElementById("kansai_style_less");
    kansai_style_more_reference = document.getElementById("kansai_style_more");
    kansai_style_order_reference = document.getElementById("kansai_style_order");

    iwakunizushi_less_reference = document.getElementById("iwakunizushi_less");
    iwakunizushi_more_reference = document.getElementById("iwakunizushi_more");
    iwakunizushi_order_reference = document.getElementById("iwakunizushi_order");

    battera_less_reference = document.getElementById("battera_less");
    battera_more_reference = document.getElementById("battera_more");
    battera_order_reference = document.getElementById("battera_order");

    order_summary_reference = document.getElementById("order_summary");
}

function set_event_listeners() {
    akami_less_reference.addEventListener("click", () => subtract_to_order("akami"));
    akami_more_reference.addEventListener("click", () => add_to_order("akami"));

    shiromi_less_reference.addEventListener("click", () => subtract_to_order("shiromi"));
    shiromi_more_reference.addEventListener("click", () => add_to_order("shiromi"));

    hikarimono_less_reference.addEventListener("click", () => subtract_to_order("hikarimono"));
    hikarimono_more_reference.addEventListener("click", () => add_to_order("hikarimono"));

    ebi_less_reference.addEventListener("click", () => subtract_to_order("ebi"));
    ebi_more_reference.addEventListener("click", () => add_to_order("ebi"));

    hosomaki_less_reference.addEventListener("click", () => subtract_to_order("hosomaki"));
    hosomaki_more_reference.addEventListener("click", () => add_to_order("hosomaki"));

    temaki_less_reference.addEventListener("click", () => subtract_to_order("temaki"));
    temaki_more_reference.addEventListener("click", () => add_to_order("temaki"));

    oshizushi_less_reference.addEventListener("click", () => subtract_to_order("oshizushi"));
    oshizushi_more_reference.addEventListener("click", () => add_to_order("oshizushi"));

    futomaki_less_reference.addEventListener("click", () => subtract_to_order("futomaki"));
    futomaki_more_reference.addEventListener("click", () => add_to_order("futomaki"));

    ikura_less_reference.addEventListener("click", () => subtract_to_order("ikura"));
    ikura_more_reference.addEventListener("click", () => add_to_order("ikura"));

    tobiko_less_reference.addEventListener("click", () => subtract_to_order("tobiko"));
    tobiko_more_reference.addEventListener("click", () => add_to_order("tobiko"));

    kazunoko_less_reference.addEventListener("click", () => subtract_to_order("kazunoko"));
    kazunoko_more_reference.addEventListener("click", () => add_to_order("kazunoko"));

    uni_less_reference.addEventListener("click", () => subtract_to_order("uni"));
    uni_more_reference.addEventListener("click", () => add_to_order("uni"));

    tokyo_style_less_reference.addEventListener("click", () => subtract_to_order("tokyo_style"));
    tokyo_style_more_reference.addEventListener("click", () => add_to_order("tokyo_style"));

    kansai_style_less_reference.addEventListener("click", () => subtract_to_order("kansai_style"));
    kansai_style_more_reference.addEventListener("click", () => add_to_order("kansai_style"));

    iwakunizushi_less_reference.addEventListener("click", () => subtract_to_order("iwakunizushi"));
    iwakunizushi_more_reference.addEventListener("click", () => add_to_order("iwakunizushi"));

    battera_less_reference.addEventListener("click", () => subtract_to_order("battera"));
    battera_more_reference.addEventListener("click", () => add_to_order("battera"));
}

function get_order_reference_for(sushi_type) {
    console.log("banana: " + sushi_type);
    let order_reference;
    if (sushi_type == "akami") {
        order_reference = akami_order_reference;
    } else if (sushi_type == "shiromi") {
        order_reference = shiromi_order_reference;
    } else if (sushi_type == "hikarimono") {
        order_reference = hikarimono_order_reference;
    } else if (sushi_type == "ebi") {
        order_reference = ebi_order_reference;
    } else if (sushi_type == "hosomaki") {
        order_reference = hosomaki_order_reference;
    } else if (sushi_type == "temaki") {
        order_reference = temaki_order_reference;
    } else if (sushi_type == "oshizushi") {
        order_reference = oshizushi_order_reference;
    } else if (sushi_type == "futomaki") {
        order_reference = futomaki_order_reference;
    } else if (sushi_type == "ikura") {
        order_reference = ikura_order_reference;
    } else if (sushi_type == "tobiko") {
        order_reference = tobiko_order_reference;
    } else if (sushi_type == "kazunoko") {
        order_reference = kazunoko_order_reference;
    } else if (sushi_type == "uni") {
        order_reference = uni_order_reference;
    } else if (sushi_type == "tokyo_style") {
        order_reference = tokyo_style_order_reference;
    } else if (sushi_type == "kansai_style") {
        order_reference = kansai_style_order_reference;
    } else if (sushi_type == "iwakunizushi") {
        order_reference = iwakunizushi_order_reference;
    } else if (sushi_type == "battera") {
        order_reference = battera_order_reference;
    }
    return order_reference;
}

function subtract_to_order(sushi_type) {
    order_reference = get_order_reference_for(sushi_type);
    let order = parseInt(order_reference.textContent);
    if (order != 0) {
        order--;
    }
    order_reference.textContent = order;
    update_order_summary();
}

function add_to_order(sushi_type) {
    order_reference = get_order_reference_for(sushi_type);
    let order = parseInt(order_reference.textContent);
    order++;
    order_reference.textContent = order;
    update_order_summary();
}

function update_order_summary() {
    // initializing total order price
    total_price = 0;

    // loop over all the orders and fill in the text area
    order_summary_reference.textContent = "";

    // go over all the items and add the ones that have order number > 0
    if(akami_order_reference.textContent != "0") {
        units = akami_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "Akami " + units + " units    $" + price + '\n';
    }

    if(shiromi_order_reference.textContent != "0") {
        units = shiromi_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "shiromi " + units + " units    $" + price + '\n';
    }

    if(hikarimono_order_reference.textContent != "0") {
        units = hikarimono_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "hikarimono " + units + " units    $" + price + '\n';
    }

    if(ebi_order_reference.textContent != "0") {
        units = ebi_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "ebi " + units + " units    $" + price + '\n';
    }

    if(hosomaki_order_reference.textContent != "0") {
        units = hosomaki_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "hosomaki " + units + " units    $" + price + '\n';
    }

    if(temaki_order_reference.textContent != "0") {
        units = temaki_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "temaki " + units + " units    $" + price + '\n';
    }

    if(oshizushi_order_reference.textContent != "0") {
        units = oshizushi_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "oshizushi " + units + " units    $" + price + '\n';
    }

    if(futomaki_order_reference.textContent != "0") {
        units = futomaki_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "futomaki " + units + " units    $" + price + '\n';
    }

    if(ikura_order_reference.textContent != "0") {
        units = ikura_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "ikura " + units + " units    $" + price + '\n';
    }

    if(tobiko_order_reference.textContent != "0") {
        units = tobiko_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "tobiko " + units + " units    $" + price + '\n';
    }

    if(kazunoko_order_reference.textContent != "0") {
        units = kazunoko_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "kazunoko " + units + " units    $" + price + '\n';
    }

    if(uni_order_reference.textContent != "0") {
        units = uni_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "uni " + units + " units    $" + price + '\n';
    }

    if(tokyo_style_order_reference.textContent != "0") {
        units = tokyo_style_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "tokyo_style " + units + " units    $" + price + '\n';
    }

    if(kansai_style_order_reference.textContent != "0") {
        units = kansai_style_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "kansai_style " + units + " units    $" + price + '\n';
    }

    if(iwakunizushi_order_reference.textContent != "0") {
        units = iwakunizushi_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "iwakunizushi " + units + " units    $" + price + '\n';
    }

    if(battera_order_reference.textContent != "0") {
        units = battera_order_reference.textContent;
        price = parseInt(units) * 10;
        total_price += price;
        order_summary_reference.textContent += "battera " + units + " units    $" + price + '\n';
    }

    order_summary_reference.textContent += "\nTotal: $" + total_price;
 }