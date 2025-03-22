

const posts = document.querySelectorAll(".lookbook-post");
const expandedView = document.querySelector(".expanded-view");
const expandedImg = document.getElementById("expanded-img");
const linksList = document.getElementById("links-list");
const closeBtn = document.querySelector(".close-btn");


// Function to toggle filter dropdown and shift results down
function toggleFilters() {
    const filterSection = document.getElementById("filter-section");
    filterSection.classList.toggle("show");

    // Change button text when toggled on and off 
    const button = document.querySelector(".filter-toggle");
    button.textContent = filterSection.classList.contains("show") ? "Filters ▲" : "Filters ▼"; 
}



// Underlines the current page
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    let currentPage = window.location.pathname.split("/").pop() || "index.html"; // Handle root page

    links.forEach(link => {
        // Normalize the href by removing query/hash parameters
        let linkHref = link.getAttribute("href").split("?")[0].split("#")[0];

        console.log(`Checking link: ${linkHref} against ${currentPage}`);

        // Handle root URL (/) case
        if (currentPage === "" && linkHref === "index.html") {
            console.log(`Match found: ${linkHref} (root page)`);
            link.classList.add("active");
        } else if (linkHref === currentPage) {
            console.log(`Match found: ${linkHref}`);
            link.classList.add("active");
        }
    });
});







// lookbook functionality 
const lookbookData = {
    1: {
        img: "img/fit1.png",
        links: [
            { name: "Magenta Sweatshirt", url: "https://www.uniqlo.com/us/en/products/E471808-000/00?colorDisplayCode=19&sizeDisplayCode=003", price: "$49.90" },
            { name: "Magenta Sweatpants", url: "https://www.uniqlo.com/us/en/products/E471809-000/00?colorDisplayCode=19&sizeDisplayCode=004", price: "$39.90" },
            { name: "North Face Puffer Shoes", url: "https://www.thenorthface.com/en-us/p/mens/mens-footwear/mens-slippers-695279/mens-thermoball-traction-mules-v-NF0A3UZN?color=411&utm_content=ecomm&utm_medium=cpc&utm_source=google&utm_campaign=US+%7C+all+%7C+Hybrid+%7C+SHOP+-+AUT+%7E+All+-+Low%2CMed%2CHigh+%28FORMERLY+Med%2CHigh%29+-+Footwear+-+General+-+PMax+Shopping&utm_term=&gad_source=1&gclsrc=aw.ds", price: "$59" }
        ]
    },
    2: {
        img: "img/fit2.png",
        links: [
            { name: "Camo Shirt", url: "https://www.abercrombie.com/shop/us/p/premium-heavyweight-20-tee-58965824?seq=11&source=googleshopping&cmp=PLA:EVG:20:A:D:US:X:GGL:X:SHOP:X:X:X:X:x:A%26F+Adults_Google_Shopping_PLA_US_Tops_All+products_PRODUCT_GROUP&gad_source=1&gclsrc=aw.ds", price: "$40" },
            { name: "Baggy Brown Jeans", url: "https://www.abercrombie.com/shop/us/p/baggy-workwear-pant-53509873?categoryId=12236&faceout=life&seq=13&afsource=social+proofing&pagefm=navigation-grid&prodvm=navigation-grid", price: "$90" },
            { name: "Black Straye Puffer Shoes", url: "https://straye.com/products/logan-puff-black?variant=42035867713603&country=US&gad_source=1", price: "$90" } ]
    }, 
    3: {
        img: "img/fit3.png",
        links: [
            { name: "Brown Sweatshirt", url: "https://www.abercrombie.com/shop/us/p/essential-popover-hoodie-59445819?seq=35&prodvm=recommendations-CoBuy_PDP_Updated_Copy-63669", price: "$60" },
            { name: "Baggy Black Jeans", url: "https://www.gapfactory.com/browse/product.do?pid=513385001&vid=1&tid=gfpl000040&kwid=1&ap=7&gad_source=1&gclsrc=aw.ds", price: "$41.99" },
            { name: "White Adidas Sambas", url: "https://www.adidas.com/us/samba-og-shoes/B75806.html?af_channel=Search&af_click_lookback=30d&af_reengagement_window=30d&c=PLA&cm_mmc=AdieSEM_Feeds-_-GoogleProductAds-_-NA-_-B75806&cm_mmca1=US&cm_mmca2=NA&gad_source=1&gclsrc=aw.ds&is_retargeting=true&kpid=B75806&pid=googleadwords_temp&sourceid=543457011B75806", price: "$100" }, 
            { name: "Black Arcteryx Toque", url: "https://arcteryx.com/us/en/shop/lightweight-bird-head-toque-9490", price: "$45" }
        ]
    },
    4: {
        img: "img/fit4.png",
        links: [
            { name: "Black ZipUp Hoodie", url: "https://www.abercrombie.com/shop/us/p/essential-cropped-full-zip-hoodie-57732341?seq=07&prodvm=recommendations-sample-63669", price: "$80" },
            { name: "Blue JNCO's", url: "https://jnco.com/products/1169-low-down-deck-20-antique", price: "$160" },
            { name: "Black Adidas Sambas", url: "https://www.adidas.com/us/samba-og-shoes/B75807.html?af_channel=Search&af_click_lookback=30d&af_reengagement_window=30d&c=PLA&cm_mmc=AdieSEM_Feeds-_-GoogleProductAds-_-NA-_-B75807&cm_mmca1=US&cm_mmca2=NA&gad_source=1&gclsrc=aw.ds&is_retargeting=true&kpid=B75807&pid=googleadwords_temp&sourceid=543457011B75807", price: "$100" }, 
            { name: "Silver Chain", url: "https://www.jared.com/mens-solid-box-chain-necklace-stainless-steel-24-3mm/p/V-423338704?cid=PLA-goo-E-Commerce%20-%20PLA%20-%20LIA%20-%20P2%20-%20Necklaces&gad_source=1&gclsrc=aw.ds", price: "$39.99" }
        ]
    },
    5: {
        img: "img/fit5.png",
        links: [
            { name: "New Balance T-Shirt", url: "https://www.urbanoutfitters.com/shop/hybrid/new-balance-hoops-graphic-tee3?category=graphic-tees-for-men&color=004&type=REGULAR&quantity=1", price: "$35" },
            { name: "Blue Jorts", url: "https://www.tillys.com/product/rsq-mens-loose-denim-carpenter-shorts/50669484007.html?gad_source=1&utm_medium=cpc&utm_source=google&utm_type=x", price: "$39.99" },
            { name: "Blue Adidas Spezial", url: "https://www.adidas.com/us/handball-spezial-shoes/BD7633.html", price: "$110" }, 
            { name: "Silver Chain", url: "https://www.jared.com/mens-solid-box-chain-necklace-stainless-steel-24-3mm/p/V-423338704?cid=PLA-goo-E-Commerce%20-%20PLA%20-%20LIA%20-%20P2%20-%20Necklaces&gad_source=1&gclsrc=aw.ds", price: "$39.99" }
        ]
    },
    6: {
        img: "img/fit6.png",
        links: [
            { name: "Dark Gray Sweatshirt", url: "https://www.abercrombie.com/shop/us/p/oversized-essential-colorblock-popover-hoodie-46732320?categoryId=12351&faceout=model&seq=34&afsource=social+proofing&pagefm=navigation-grid&prodvm=navigation-grid", price: "$70" },
            { name: "Baggy Black Jeans", url: "https://www2.hm.com/en_us/productpage.1260177001.html?srsltid=AfmBOoqdi2Ei1CCYJn34ONpMUdeoaYPQNBxedKK0m5DENCq02EAnAXxEYVQ&gQT=1", price: "$44.99" },
            { name: "Black Doc Marten Loafers", url: "https://www.drmartens.com/us/en/adrian-bex-smooth-leather-tassel-loafers-black/p/26957001?id=1", price: "$160" }, 
            { name: "Black Arcteryx Toque", url: "https://arcteryx.com/us/en/shop/lightweight-bird-head-toque-9490", price: "$45" }
        ]
    },
    7: {
        img: "img/fit7.png",
        links: [
            { name: "White Graphic Tee", url: "https://www2.hm.com/en_us/productpage.0972640124.html", price: "$17.99" },
            { name: "Baggy Brown Jeans", url: "https://www.abercrombie.com/shop/us/p/baggy-workwear-pant-53509873?categoryId=12236&faceout=life&seq=13&afsource=social+proofing&pagefm=navigation-grid&prodvm=navigation-grid", price: "$90" },
            { name: "Black Doc Marten Boots", url: "https://www.drmartens.com/us/en/1461-bex-smooth-leather-shoes-black/p/21084001", price: "$150" },         ]
    },
    8: {
        img: "img/fit8.png",
        links: [
            { name: "White Radio Graphic Tee", url: "https://www2.hm.com/en_us/productpage.1034065153.html", price: "$17.99" },
            { name: "Gray Jorts", url: "https://www.pacsun.com/pacsun/gray-baggy-denim-shorts-7350457.html?store=&country=US&currency=USD&OriginId=GOG&XCIDP=P%3A&gad_source=1&gclsrc=aw.ds", price: "$49.95" },
            { name: "Navy Blue and White Spezials", url: "https://www.adidas.com/us/handball-spezial-shoes/JH5440.html", price: "$110" },         ]
    },
    9: {
        img: "img/fit9.png",
        links: [
            { name: "Cream Sweater", url: "https://www.uniqlo.com/us/en/products/E475298-000/00?colorDisplayCode=31&sizeDisplayCode=002&srsltid=AfmBOopc03j6ppdr6CX-tJcNEiCLzlCR51rZcoxf7PhTssNgYvG9dXRMNNg&gQT=1", price: "$29.90" },
            { name: "Baggy Black Jeans", url: "https://www2.hm.com/en_us/productpage.1260177001.html?srsltid=AfmBOoqdi2Ei1CCYJn34ONpMUdeoaYPQNBxedKK0m5DENCq02EAnAXxEYVQ&gQT=1", price: "$44.99" },
            { name: "Black Arcteryx Toque", url: "https://arcteryx.com/us/en/shop/lightweight-bird-head-toque-9490", price: "$45" }, 
            { name: "UGG Tasman Slippers", url: "https://www.ugg.com/men-slippers/tasman-slipper/5950.html?dwvar_5950_color=CHE&utm_source=google&utm_medium=pla&cq_src=google_ads&cq_cmp=22202267712&cq_con=&cq_term=&cq_med=pla&cq_plac=&cq_net=x&cq_pos=&cq_plt=gp&gad_source=1&gclsrc=aw.ds", price: "$110" },         ]
    },
    10: {
        img: "img/fit10.png",
        links: [
            { name: "Dark Gray Sweatshirt", url: "https://www.abercrombie.com/shop/us/p/oversized-essential-colorblock-popover-hoodie-46732320?categoryId=12351&faceout=model&seq=34&afsource=social+proofing&pagefm=navigation-grid&prodvm=navigation-grid", price: "$70" },
            { name: "Baggy Blue Jeans", url: "https://www.hollisterco.com/shop/us/p/medium-wash-super-baggy-jeans-58661022?seq=02&utm_source=googleshopping", price: "$49.95" },
            { name: "Green and Cream Hat", url: "https://www.seagerco.com/products/los-rios-corduroy-snapback-natural-green?variant=41399452401698&absrc=Google&abid=&abcampid=21029982125&abgroupid=&abkwdid=&gad_source=1", price: "$35" }, 
            { name: "Silver Chain", url: "https://www.jared.com/mens-solid-box-chain-necklace-stainless-steel-24-3mm/p/V-423338704?cid=PLA-goo-E-Commerce%20-%20PLA%20-%20LIA%20-%20P2%20-%20Necklaces&gad_source=1&gclsrc=aw.ds", price: "$39.99" }, 
            { name: "Birkenstock Clog Slippers", url: "https://www.birkenstock.com/us/boston-soft-footbed-suede-leather/boston-suede-suedeleather-softfootbed-eva-u_46.html?dwvar_boston-suede-suedeleather-softfootbed-eva-u__46_width=S&dwvar_boston-suede-suedeleather-softfootbed-eva-u__46_size=280&gad_source=1", price: "$165" },         ]
    },
    11: {
        img: "img/fit11.png",
        links: [
            { name: "Gray Scuffers Hoodie (Universal)", url: "https://scuffers.com/products/universal-melagne-hoodie", price: "$95" },
            { name: "Baggy Black Jeans", url: "https://www2.hm.com/en_us/productpage.1260177001.html?srsltid=AfmBOoqdi2Ei1CCYJn34ONpMUdeoaYPQNBxedKK0m5DENCq02EAnAXxEYVQ&gQT=1", price: "$44.99" },
            { name: "Blue Acteryx Beanie", url: "https://arcteryx.com/us/en/shop/grotto-toque", price: "$60" },         
            { name: "Black Adidas Sambas", url: "https://www.adidas.com/us/samba-og-shoes/B75807.html?af_channel=Search&af_click_lookback=30d&af_reengagement_window=30d&c=PLA&cm_mmc=AdieSEM_Feeds-_-GoogleProductAds-_-NA-_-B75807&cm_mmca1=US&cm_mmca2=NA&gad_source=1&gclsrc=aw.ds&is_retargeting=true&kpid=B75807&pid=googleadwords_temp&sourceid=543457011B75807", price: "$100" }, ]
    },
    12: {
        img: "img/fit12.png",
        links: [
            { name: "Dark Gray Scuffers Hoodie", url: "https://scuffers.com/products/animal-black-hoodie", price: "$95" },
            { name: "Blue JNCO's", url: "https://jnco.com/products/1169-low-down-deck-20-antique", price: "$160" },
            { name: "Silver Chain", url: "https://www.jared.com/mens-solid-box-chain-necklace-stainless-steel-24-3mm/p/V-423338704?cid=PLA-goo-E-Commerce%20-%20PLA%20-%20LIA%20-%20P2%20-%20Necklaces&gad_source=1&gclsrc=aw.ds", price: "$39.99" }, 
            { name: "Birkenstock Clog Slippers", url: "https://www.birkenstock.com/us/boston-soft-footbed-suede-leather/boston-suede-suedeleather-softfootbed-eva-u_46.html?dwvar_boston-suede-suedeleather-softfootbed-eva-u__46_width=S&dwvar_boston-suede-suedeleather-softfootbed-eva-u__46_size=280&gad_source=1", price: "$165" },         ]
    },
    13: {
        img: "img/fit13.png",
        links: [
            { name: "Blue Knit Sweater", url: "https://scuffers.com/products/case-navy-knit", price: "$113" },
            { name: "Baggy Brown Jeans", url: "https://www.abercrombie.com/shop/us/p/baggy-workwear-pant-53509873?categoryId=12236&faceout=life&seq=13&afsource=social+proofing&pagefm=navigation-grid&prodvm=navigation-grid", price: "$100" },
            { name: "Cream and Blue Maine Hat", url: "https://cellyhockeyco.com/products/maine-pond-hockey-snapback-cream?variant=44441341460699&country=US&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1", price: "$34.99" }, 
            { name: "Silver Chain", url: "https://www.jared.com/mens-solid-box-chain-necklace-stainless-steel-24-3mm/p/V-423338704?cid=PLA-goo-E-Commerce%20-%20PLA%20-%20LIA%20-%20P2%20-%20Necklaces&gad_source=1&gclsrc=aw.ds", price: "$39.99" }, 
            { name: "Black Doc Marten Loafers", url: "https://www.drmartens.com/us/en/adrian-bex-smooth-leather-tassel-loafers-black/p/26957001?id=1", price: "$160" }, ]
    },
    14: {
        img: "img/fit14.png",
        links: [
            { name: "Green Scuffers Hoodie (Global)", url: "https://scuffers.com/products/globally-green-hoodie", price: "$95" },
            { name: "Gray Jorts", url: "https://www.pacsun.com/pacsun/gray-baggy-denim-shorts-7350457.html?store=&country=US&currency=USD&OriginId=GOG&XCIDP=P%3A&gad_source=1&gclsrc=aw.ds", price: "$49.95" },
            { name: "Black Straye Puffer Shoes", url: "https://straye.com/products/logan-puff-black?variant=42035867713603&country=US&gad_source=1", price: "$90" }  ]
    }, 
    15: {
        img: "img/fit15.png",
        links: [
            { name: "Green Scuffers Hoodie", url: "https://scuffers.com/products/animal-green-hoodie", price: "$99" },
            { name: "Baggy Blue Jeans", url: "https://www.hollisterco.com/shop/us/p/medium-wash-super-baggy-jeans-58661022?seq=02&utm_source=googleshopping", price: "$49.95" },
            { name: "White Adidas Sambas", url: "https://www.adidas.com/us/samba-og-shoes/B75806.html?af_channel=Search&af_click_lookback=30d&af_reengagement_window=30d&c=PLA&cm_mmc=AdieSEM_Feeds-_-GoogleProductAds-_-NA-_-B75806&cm_mmca1=US&cm_mmca2=NA&gad_source=1&gclsrc=aw.ds&is_retargeting=true&kpid=B75806&pid=googleadwords_temp&sourceid=543457011B75806", price: "$100" },         ]
    },
    16: {
        img: "img/fit16.png",
        links: [
            { name: "Gray Sweatshirt", url: "https://www.aritzia.com/us/en/product/cozy-sweatfleece-perfect-hoodie/116209099.html?color=4425", price: "$80" },
            { name: "Gray Cargo Sweatpants", url: "https://www.aritzia.com/us/en/product/cozy-sweatfleece-mega-cargo%E2%84%A2-sweatpant/116230.html?color=4425_2", price: "$85" },
            { name: "Chunky Gold Hoops", url: "https://mejuri.com/products/chunky-huggie-hoops?variant=48248426463416&country=US&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoqEzWMgGtVkgraEsx-MxEh43oXXB4Z8f07c3gcUdU0Qcom462kRKos&com_cvv=8fb3d522dc163aeadb66e08cd7450cbbdddc64c6cf2e8891f6d48747c6d56d2c", price: "$98" },
            { name: "UGG Ultra Mini Platofrm Boots", url: "https://www.ugg.com/women-boots-classic-boots/classic-ultra-mini-platform/1135092.html?dwvar_1135092_color=CHE&utm_source=google&utm_medium=pla&cq_src=google_ads&cq_cmp=17573506022&cq_con=&cq_term=&cq_med=pla&cq_plac=&cq_net=x&cq_pos=&cq_plt=gp&gad_source=1&gclsrc=aw.ds", price: "$160" },
            { name: "Navy Blue Longchamp Bag", url: "https://www.nordstrom.com/s/medium-le-pliage-nylon-shoulder-tote/2941048?country=US&currency=USD&utm_content=174249820503&utm_term=pla-293946777986&utm_channel=low_nd_shopping_standard&utm_source=google&utm_campaign=22283920274&adpos=&creative=734725774943&device=c&matchtype=&network=g&acctid=21700000001689570&dskeywordid=92700081552423958&lid=92700081552423958&ds_s_kwgid=58700008853146757&ds_s_inventory_feed_id=97700000007631122&dsproductgroupid=293946777986&product_id=3155818&merchid=1243147&prodctry=US&prodlang=en&channel=local&storeid=32&locationid=1026980&targetid=pla-293946777986&campaignid=22283920274&adgroupid=174249820503&gad_source=1&gclsrc=aw.ds", price: "$145" },         ]
    },
    17: {
        img: "img/fit17.png",
        links: [
            { name: "White and Blue Teddy Bear Sweater", url: "https://www.hollisterco.com/shop/us/p/hollister-comfy-cloud-bow-graphic-crew-sweater-58703821?faceout=model&seq=01&pagefm=navigation-grid&prodvm=navigation-grid", price: "$49.95" },
            { name: "Blue Straight Leg Jeans", url: "https://bananarepublicfactory.gapfactory.com/browse/product.do?pid=694878021&vid=1&tid=bfns000001#pdp-page-content", price: "$54" },
            { name: "Gold Necklace", url: "https://mejuri.com/shop/products/vermeil-linked-necklace?currency=USD&source=shoppingads&srsltid=AfmBOop4eTegxOL2OScrdf1Tu8ZVYrzJD9o-97rfyHg_qxGLpM5IoSRl9WU", price: "$148" }, 
            { name: "UGG Platform Tazz Slippers", url: "https://www.ugg.com/women-slippers/tazz-ii/1174471.html?dwvar_1174471_color=CHE&utm_source=google&utm_medium=pla&cq_src=google_ads&cq_cmp=17896815752&cq_con=&cq_term=&cq_med=pla&cq_plac=&cq_net=x&cq_pos=&cq_plt=gp&gad_source=1&gclsrc=aw.ds", price: "$140" },         ]
    },
    18: {
        img: "img/fit18.png",
        links: [
            { name: "Blue Scuffers Hoodie", url: "https://scuffers.com/products/safari-blue-hoodie?variant=48756403306824&utm_source=google&utm_medium=organic&utm_campaign=SCUFFERS%20USA%20-%20EN&utm_content=Safari%20Blue%20Hoodie&utm_source=google&utm_medium=cpc&utm_campaign=21NOVA_ES_pMAX&utm_id=21136181491&gad_source=1", price: "$95" },
            { name: "Baggy Black Jeans", url: "https://www.hollisterco.com/shop/ProductDisplay?storeId=10251&seq=01&productId=59225838&collectionId=610595&catalogId=10201&langId=-1&prodvm=recommendations-SimilarProducts-", price: "$49.95" },
            { name: "Pink Arcteryx Toque", url: "https://www.lyst.com/accessories/arcteryx-bird-head-toque-60/", price: "$45" }, 
            { name: "Chunky Gold Earrings", url: "https://www.anthropologie.com/shop/hybrid/interlocked-circle-post-earrings?color=070&size=One+Size&type=STANDARD&inventoryCountry=US&countryCode=US&quantity=1", price: "$29.95" }, 
            { name: "Navy Blue and White Spezials", url: "https://www.adidas.com/us/handball-spezial-shoes/JH5440.html", price: "$110" },         ]
    },
    19: {
        img: "img/fit19 .png",
        links: [
            { name: "Patagonia Fleece", url: "https://www.patagonia.com/product/mens-microdini-half-zip-fleece-pullover/26200.html?dwvar_26200_color=PLCN", price: "$129" },
            { name: "Baggy Black Jeans", url: "https://www2.hm.com/en_us/productpage.1260177001.html?srsltid=AfmBOoqdi2Ei1CCYJn34ONpMUdeoaYPQNBxedKK0m5DENCq02EAnAXxEYVQ&gQT=1", price: "$44.99" },
            { name: "North Face Puffer Shoes", url: "https://www.thenorthface.com/en-us/p/mens/mens-footwear/mens-slippers-695279/mens-thermoball-traction-mules-v-NF0A3UZN?color=411&utm_content=ecomm&utm_medium=cpc&utm_source=google&utm_campaign=US+%7C+all+%7C+Hybrid+%7C+SHOP+-+AUT+%7E+All+-+Low%2CMed%2CHigh+%28FORMERLY+Med%2CHigh%29+-+Footwear+-+General+-+PMax+Shopping&utm_term=&gad_source=1&gclsrc=aw.ds", price: "$59" } ] 
    },
    20: {
        img: "img/fit20.png",
        links: [
            { name: "Blue and Gray Alfric Eden Hoodie", url: "https://www.aelfriceden.com/collections/hoodies/products/aelfric-eden-stellaris-embroidered-hoodie?variant=43030523740322", price: "48" },
            { name: "Straight Leg Black Jeans", url: "https://www.hollisterco.com/shop/us/p/low-rise-dark-wash-super-baggy-jeans-59053360?categoryId=12623&faceout=model&seq=25&afsource=social+proofing&pagefm=navigation-grid&prodvm=navigation-grid", price: "$49.95" },
            { name: "Chunky Gold Hoops", url: "https://mejuri.com/products/chunky-huggie-hoops?variant=48248426463416&country=US&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoqEzWMgGtVkgraEsx-MxEh43oXXB4Z8f07c3gcUdU0Qcom462kRKos&com_cvv=8fb3d522dc163aeadb66e08cd7450cbbdddc64c6cf2e8891f6d48747c6d56d2c", price: "$98" },
            { name: "Gold Pura Vida Bracelet", url: "https://www.puravidabracelets.com/products/engravable-bar-slider-bracelet?variant=40350629757014&utm_source=google&utm_medium=cpc-nonbrand&utm_campaign=19659987050&utm_content=nonbrand&utm_term=&nbt=nb%3Aadwords%3Ax%3A19659987050%3A%3A&nb_adtype=pla&nb_kwd=&nb_ti=&nb_mi=8895165&nb_pc=online&nb_pi=40350629757014&nb_ppi=&nb_placement=&nb_si=%7Bsourceid%7D&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=&gad_source=1", price: "$18.20" },
            { name: "Blue Adidas Spezial", url: "https://www.adidas.com/us/handball-spezial-shoes/BD7633.html", price: "$110" }, ]
    },
    21: {
        img: "img/fit21.png",
        links: [
            { name: "Blue Alfric Eden Jersey", url: "https://www.aelfriceden.com/collections/best-seller/products/aelfric-eden-color-blocking-v-neck-tee?variant=44642117845154", price: "$34" },
            { name: "Baggy Black Jeans", url: "https://www2.hm.com/en_us/productpage.1260177001.html?srsltid=AfmBOoqdi2Ei1CCYJn34ONpMUdeoaYPQNBxedKK0m5DENCq02EAnAXxEYVQ&gQT=1", price: "$44.99" },
            { name: "Black Straye Puffer Shoes", url: "https://straye.com/products/logan-puff-black?variant=42035867713603&country=US&gad_source=1", price: "$90" } ]
    }, 
    22: {
        img: "img/fit22.png",
        links: [
            { name: "Red Leather Jacket", url: "https://www.aelfriceden.com/collections/best-seller/products/aelfric-eden-solid-vintage-faux-leather-jacket?variant=44228550230178", price: "$99.95" },
            { name: "Baggy Blue Jeans", url: "https://www.aelfriceden.com/collections/best-seller/products/aelfric-eden-vintage-basic-loose-jeans?variant=44837723144354", price: "$49" },
            { name: "Chunky Gold Bracelet", url: "https://www.madewell.com/p/womens/accessories/jewelry/bracelets/chunky-dome-cuff-bracelet/NR288/?ccode=EE7744&size=ONE%20S&source=googlePLA&srcCode=Paid_Search%7CShopping_NonBrand_PMax_NCA%7CGoogle%7CMWGGBS00002_99107767640_18211078200___c_pla_online__1026980&utm_source=google&utm_medium=cpc&utm_campaign=Madewell_Shopping_PLA_US_Women_HighInventory_PMax&utm_term=&utm_content=shopping_ads&gad_source=1&gclsrc=aw.ds", price: "$58" },
            { name: "Chunky Gold Hoops", url: "https://mejuri.com/products/chunky-huggie-hoops?variant=48248426463416&country=US&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoqEzWMgGtVkgraEsx-MxEh43oXXB4Z8f07c3gcUdU0Qcom462kRKos&com_cvv=8fb3d522dc163aeadb66e08cd7450cbbdddc64c6cf2e8891f6d48747c6d56d2c", price: "$98" },
            { name: "Red and Cream Adidas Sambas", url: "https://www.footlocker.com/product/~/JS3541.html?source=shoppingads&locale=en-US&SID=9114&inceptor=1&cm_mmc=paid%20search-_-google-_--_-PLA-_-DPA-_--_-P-_-Prospecting-_--_-20572748779-_--_--_-PLA-_-JS35418-_--_--_-&cm_mmc=Paid%20Search-_-Google-_--_-Shopping-_--_--_--_-PMX-_-Evergreen-_-20572748779-_--_--_--_--_--_--_-&gad_source=1&gclsrc=aw.ds", price: "$120" } ]
    },
    23: {
        img: "img/fit23.png",
        links: [
            { name: "Oversized Gray Sweater", url: "https://www.zara.com/us/en/basic-soft-knit-sweater-p02142168.html?v1=429381369&utm_source=google&utm_medium=cpc&gad_source=1", price: "$49.90" },
            { name: "Straight Leg Denim Jeans", url: "https://www.hollisterco.com/shop/us/p/low-rise-dark-wash-super-baggy-jeans-59053360?categoryId=12623&faceout=model&seq=25&afsource=social+proofing&pagefm=navigation-grid&prodvm=navigation-grid", price: "$49.95" },
            { name: "Brown Leather Coach Bag", url: "https://www.coach.com/products/brooklyn-shoulder-bag-28/CU068-B4MPL.html?COHNA=true&cid=S_GPLACU068&ogmap=PLA%7CRTN%7CGOOG%7CSTND%7Cc%7CSITEWIDE%7CRetail%7CCoach_RTL_Google_PLA_Signal_NA_Brand_National_Pmax_NA_BAU%7CShopping_Smart_Brand%7C%7C22170925638%7C%7CUS&utm_source=google&utm_medium=cpc&utm_campaign=Coach_RTL_Google_PLA_Signal_NA_Generic_National_Pmax_NA_BAU_Bags&utm_id=go_cmp-22170925638_adg-_ad-__dev-c_ext-_prd-CU068+B4MPL_sig-Cj0KCQjw-e6-BhDmARIsAOxxlxX5BKypFnEe6iLbY2BMSUzK1KPU1qWWvbTrXKU9R1rrMS4rbY1Kx8gaAi3OEALw_wcB&gad_source=1&gclsrc=aw.ds", price: "$295" },
            { name: "Chunky Gold Square Hoops", url: "https://www.nordstrom.com/s/chunky-gold-hoop-earrings-colene/7940394?color=Gold&size=medium&country=US&currency=USD&utm_source=google&utm_medium=organic&utm_campaign=seo_shopping&utm_channel=low_nd_seo_shopping&srsltid=AfmBOoqDuA3QHoET4640GQo4ilp-9NLW7A6QHnPXWS4qLvOV6kDvu8VCdTE&gQT=1", price: "$75" },
            { name: "Cheetah Print Steve Madden Sneakers", url: "https://www.nordstrom.com/s/steve-madden-madrid-low-top-sneaker-women/7927916?color=LEOPARD&size=8.5&utm_content=174249820503&utm_term=pla-293946777986&utm_channel=low_nd_shopping_standard&utm_source=google&utm_campaign=22283920274&adpos=&creative=734725774943&device=c&matchtype=&network=g&acctid=21700000001689570&dskeywordid=92700081552423958&lid=92700081552423958&ds_s_kwgid=58700008853146757&ds_s_inventory_feed_id=97700000007631122&dsproductgroupid=293946777986&product_id=A2854983&merchid=1243147&prodctry=US&prodlang=en&channel=online&storeid=&locationid=1026980&targetid=pla-293946777986&campaignid=22283920274&adgroupid=174249820503&gad_source=1&gclsrc=aw.ds", price: "$36" }, ] 
    },

    24: {
        img: "img/fit24.png",
        links: [
            { name: "Striped Denim Overall Shorts", url: "https://cottonon.com/US/short-denim-overall/2056736-13.html?dwvar_2056736-13_color=2056736-13&cgid=&originalPid=2056736-13", price: "$25" },
            { name: "Basic White Longsleeve", url: "https://www.hollisterco.com/shop/us/p/soft-stretch-seamless-fabric-crew-top-59033355?seq=01&utm_source=googleshopping&adpos=&scid=scplp660894986&sc_intid=660894986&cmp=PLA:EVG:20:HCo:D:USCA:X:GGL:X:SHOP:X:X:X:X:x:HCO_Google_Shopping_PLA_US_Tops_All+Products_PRODUCT_GROUP&gad_source=1&gclsrc=aw.ds", price: "$19.95" },
            { name: "Red Bandanna", url: "https://www.freepeople.com/shop/bridgette-bandana-hair-scarf/?color=060&countryCode=US&gad_source=1&gclsrc=aw.ds&inventoryCountry=US&utm_kxconfid=vx6ro62gj&type=REGULAR&size=One+Size&quantity=1", price: "$18" },
            { name: "Birkenstock Clog Slippers", url: "https://www.birkenstock.com/us/boston-soft-footbed-suede-leather/boston-suede-suedeleather-softfootbed-eva-u_46.html?dwvar_boston-suede-suedeleather-softfootbed-eva-u__46_width=S&dwvar_boston-suede-suedeleather-softfootbed-eva-u__46_size=280&gad_source=1", price: "$165" },         ]
    },

    25: {
        img: "img/fit25.png",
        links: [
            { name: "Navy Blue Lace Tanktop", url: "https://www.hollisterco.com/shop/us/p/crochet-style-tie-front-sweater-tank-59162851?categoryId=61973040&faceout=model&seq=04&afsource=social+proofing&bvstate=pg:2/ct:r", price: "$39.95" },
            { name: "Mini Denim Skirt", url: "https://www.hollisterco.com/shop/us/p/low-rise-denim-mini-skort-58831321?seq=12&utm_source=googleshopping&adpos=&scid=scplp661372645&sc_intid=661372645&cmp=PLA:EVG:20:HCo:D:USCA:X:GGL:X:SHOP:X:X:X:X:x:HCO_Google_Shopping_PMAX_US_Seasonal__&gad_source=1&gclsrc=aw.ds", price: "$39.95" },
            { name: "Chunky Gold Hoops", url: "https://mejuri.com/products/chunky-huggie-hoops?variant=48248426463416&country=US&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoqEzWMgGtVkgraEsx-MxEh43oXXB4Z8f07c3gcUdU0Qcom462kRKos&com_cvv=8fb3d522dc163aeadb66e08cd7450cbbdddc64c6cf2e8891f6d48747c6d56d2c", price: "$98" },
            { name: "Black Baggu Bag", url: "https://www.baggu.com/products/small-recycled-leather-crescent-bag-black", price: "$150" },
            { name: "Cream and Maroon Adidas Gazelle Platforms", url: "https://www.adidas.com/us/gazelle-bold-shoes/JQ5127.html?af_channel=Search&af_click_lookback=30d&af_reengagement_window=30d&c=PLA&cm_mmc=AdieSEM_Feeds-_-GoogleProductAds-_-NA-_-JQ5127&cm_mmca1=US&cm_mmca2=NA&gad_source=1&gclsrc=aw.ds&is_retargeting=true&kpid=JQ5127&pid=googleadwords_temp&sourceid=543457011JQ5127", price: "$120" },         ]
    },

};

document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.createElement("h3");
    titleElement.textContent = "Links to Outfit Items:";  // Static title
    document.getElementById("item-details").prepend(titleElement);
});

posts.forEach(post => {
    post.addEventListener("click", () => {
        const postId = post.getAttribute("data-post");
        const data = lookbookData[postId];

        if (data) {
            expandedImg.src = data.img;

            // Clear existing links
            linksList.innerHTML = "";

            // Add links for the current outfit
            data.links.forEach(link => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<a href="${link.url}" target="_blank">${link.name} - ${link.price}</a>`;
                linksList.appendChild(listItem);
            });

            expandedView.classList.add("show");
            expandedView.style.display = "flex";
        }
    });
});

closeBtn.addEventListener("click", () => {
    expandedView.style.display = "none";
    expandedView.classList.remove("show");
});
