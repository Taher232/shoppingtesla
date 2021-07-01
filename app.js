var total = Number(document.getElementById("total").innerText);

//function plus button

var plus = document.querySelectorAll(".plus");
for (let btn of plus) {
    btn.addEventListener("click", function () {
        let price = Number(
            document.getElementById(btn.getAttribute("name") + "_price")
                .innerHTML
        );

        let qty = Number(
            document.getElementById(btn.getAttribute("name") + "_qty").innerHTML
        );

        qty++;
        console.log(qty);
        total += price;
        document.getElementById("total").innerHTML = total;
        document.getElementById(
            btn.getAttribute("name") + "_qty"
        ).innerHTML = qty;
    });
}

//function minus button

var moin = document.querySelectorAll(".moin");
for (let btn of moin) {
    btn.addEventListener("click", function () {
        let price = Number(
            document.getElementById(btn.getAttribute("name") + "_price")
                .innerHTML
        );

        let qty = Number(
            document.getElementById(btn.getAttribute("name") + "_qty").innerHTML
        );
        if (qty > 0) {
            qty--;
            console.log(qty);
            total -= price;
            document.getElementById("total").innerHTML = total;
            document.getElementById(
                btn.getAttribute("name") + "_qty"
            ).innerHTML = qty;
        } else alert("stop");
    });
}

//function delete button

var del = document.querySelectorAll(".delete");
for (let btn of del) {
    btn.addEventListener("click", function () {
        let price = Number(
            document.getElementById(btn.getAttribute("name") + "_price")
                .innerHTML
        );
        let qty = Number(
            document.getElementById(btn.getAttribute("name") + "_qty").innerHTML
        );
        total -= price * qty;
        console.log(total);
        document.getElementById(btn.getAttribute("name")).remove();
        document.getElementById("total").innerHTML = total;
    });
}

//function like button

var heart = document.querySelectorAll(".fa-heart");
for (let like of heart) {
    like.addEventListener("click", function () {
        var element = document.getElementById(
            like.getAttribute("name") + "_like"
        );
        element.classList.toggle("red");
    });
}