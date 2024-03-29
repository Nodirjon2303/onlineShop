

function render_category(cat_id){
    console.log(cat_id)
    var url = `/`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            'cat_id': cat_id,
            'salom':"alik"
        })
    })
        .then((response) => {
            response.json().then((data) => {
                console.log(data)

                data = data['data']
                html=``
                for (i=0; i<data.length;i++){
                   html+= `
                    <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div class="single-product">
                            <div class="product-img">
                                <a href="product-details.html">
                                    <img class="default-img" src="${data[i].image}" alt="#">
                                        <img class="hover-img" src="${data[i].image}" alt="#">
                                </a>
                                <div class="button-head">
                                    <div data-product_id='2' data-price='29' class="product-action">
                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View"
                                           href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                        <a title="Wishlist" id="likesection_${data[i].id}" onclick="like_function(${data[i].id})"><i
                                            class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                        <a title="Compare" href=""><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                    </div>
                                    <div data-product_id='2' onclick="addtocart(${data[i].id})" data-price='29' class="product-action-2">
                                        <a title="Add to cart">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-content">
                                <h3><a href="product-details.html">${data[i].name}</a></h3>
                                <div class="product-price">
                                    <span>$${data[i].price}</span>
                                </div>
                            </div>
                        </div>
                    </div>`
                }

                document.getElementById('category-product').innerHTML = html;
            })
        })


}

function addtocart(product_id){
    console.log(product_id)
    var url = `/cart`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            'product_id': product_id
        })
    })
        .then((response) => {
            response.json().then((data) => {
                console.log(data)
            })
        })


}


function plus_minus_button(plusminus, id){
    console.log(plusminus, id)
    if (plusminus == 'plus'){
        soni = document.getElementById(`quant_${id}`).value
        soni = parseInt(soni)
        if (soni>0) {
            document.getElementById(`quant_${id}`).value = soni+1
        }
    }
    else {
        soni = document.getElementById(`quant_${id}`).value
        soni = parseInt(soni)
        if (soni>1) {
            document.getElementById(`quant_${id}`).value = soni-1
        }
    }
    if (soni>0) {
        var url = `/quantitychange`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({
                'order_det_id': id,
                'quantity': soni
            })
        })
            .then((response) => {
                response.json().then((data) => {
                    console.log(data)
                })
            })
    }

}


function quant_send_function(unit_price, id){
    console.log(id)
    qunatity = parseInt(document.getElementById(`quant_${id}`).value);
    console.log(qunatity)
    var url = `/quantitychange`
    if (!qunatity) {
        document.getElementById(`quant_${id}`).value = 1
        qunatity = 1
    }
    document.getElementById(`total_amount_${id}`).innerHTML = `$${parseInt(qunatity)*parseInt(unit_price)}`
    console.log(document.getElementById(`total_amount_${id}`).innerHTML)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({
                'order_det_id': id,
                'quantity': qunatity
            })
        })
            .then((response) => {
                response.json().then((data) => {
                    console.log(data)
                })
            })
}


function delete_ord_det(ord_id){
    console.log(ord_id)
    var url = `/cart-delete`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            'ord_det_id': ord_id
        })
    })
        .then((response) => {
            response.json().then((data) => {
                window.location = '/cart'
            })
        })
}

function like_function(product_id){
    console.log(product_id)
    var url = `/like`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            'product_id': product_id
        })
    })
        .then((response) => {
            response.json().then((data) => {
                console.log(data)
                if (data['like']){
                    document.getElementById(`likesection_${product_id}`).innerHTML = `<i class="fa fa-heart" style="font-size:25px;color:red"></i><span>Add to Wishlist</span>`
                }
                else {
                    document.getElementById(`likesection_${product_id}`).innerHTML = `<i class=" ti-heart "></i><span>Add to Wishlist</span>`

                }
            })
        })
}


function all_likes(data){
    console.log(data)
    for (i=0;i<data.length; i++){
        document.getElementById(`likesection_${data[i]}`).innerHTML = `<i class="fa fa-heart" style="font-size:25px;color:red"></i><span>Add to Wishlist</span>`

    }
}