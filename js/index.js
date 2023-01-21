const breakfast = document.getElementById("breakfastDiv");
const lunch = document.getElementById("lunchDiv");
const snacks = document.getElementById("snacksDiv");
const dinner = document.getElementById("dinnerDiv");
const allFoodBtn = document.getElementById("addDishShowBtn");
const allCategory = document.querySelectorAll(".categ");
const dynamicHeader = document.getElementById("dynamicHead");
const dynamicMainDivBox = document.getElementById("dynamicMainDivBox");

let len = document.querySelectorAll(".categ");


breakfast.addEventListener("click",()=>{
        breakfast.classList.toggle("selected");
        document.querySelector(".showResults").classList.remove("dn");
        document.querySelector(".showResults").innerHTML="SHOW RESULTS FOR BREAKFAST"
        
        if(lunch.classList.contains("selected")){
            lunch.classList.remove("selected")
        }

        if(snacks.classList.contains("selected")){
            snacks.classList.remove("selected")
        }

        if(dinner.classList.contains("selected")){
            dinner.classList.remove("selected")
        }

        if(lunch.classList.contains("selected")==false && breakfast.classList.contains("selected")==false && snacks.classList.contains("selected")==false && dinner.classList.contains("selected")==false){
            
            document.querySelector(".showResults").classList.add("dn");
        }
    })


    lunch.addEventListener("click",()=>{
        lunch.classList.toggle("selected");
        document.querySelector(".showResults").classList.remove("dn");
        document.querySelector(".showResults").innerHTML="SHOW RESULTS FOR LUNCH"
        
        if(breakfast.classList.contains("selected")){
            breakfast.classList.remove("selected")
        }

        if(snacks.classList.contains("selected")){
            snacks.classList.remove("selected")
        }
        
        if(dinner.classList.contains("selected")){
            dinner.classList.remove("selected")
        }

        if(lunch.classList.contains("selected")==false && breakfast.classList.contains("selected")==false && snacks.classList.contains("selected")==false && dinner.classList.contains("selected")==false){

            document.querySelector(".showResults").classList.add("dn");
        }
    })
    
    
    snacks.addEventListener("click",()=>{
        snacks.classList.toggle("selected");
        document.querySelector(".showResults").classList.remove("dn");
        document.querySelector(".showResults").innerHTML="SHOW RESULTS FOR SNACKS"
        
        if(lunch.classList.contains("selected")){
            lunch.classList.remove("selected")
        }

        if(breakfast.classList.contains("selected")){
            breakfast.classList.remove("selected")
        }

        if(dinner.classList.contains("selected")){
            dinner.classList.remove("selected")
        }
        
        if(lunch.classList.contains("selected")==false && breakfast.classList.contains("selected")==false && snacks.classList.contains("selected")==false && dinner.classList.contains("selected")==false){
            
            document.querySelector(".showResults").classList.add("dn");
        }
    })

    
    dinner.addEventListener("click",()=>{
        dinner.classList.toggle("selected");
        document.querySelector(".showResults").classList.remove("dn");
        document.querySelector(".showResults").innerHTML="SHOW RESULTS FOR DINNER"
        
        if(lunch.classList.contains("selected")){
            lunch.classList.remove("selected")
        }

        if(snacks.classList.contains("selected")){
            snacks.classList.remove("selected")
        }

        if(breakfast.classList.contains("selected")){
            breakfast.classList.remove("selected")
        }
        if(lunch.classList.contains("selected")==false && breakfast.classList.contains("selected")==false && snacks.classList.contains("selected")==false && dinner.classList.contains("selected")==false){
    
            document.querySelector(".showResults").classList.add("dn");
        }
    })


    // displaying form when entering values:
    let form = document.getElementById("form");
    let dishAdd = document.getElementById("addDish");
    let anothForm = document.getElementById("form2");
    
    dishAdd.addEventListener("click",()=>{
    
        document.querySelector(".formSubDiv").classList.remove("dn");
        form.classList.remove("dn");
        anothForm.classList.add("dn");
        scrollToTop();

    })

    //going back from here:
    let backBtn = document.getElementById("goback");

    backBtn.addEventListener("click",()=>{
        document.querySelector(".formSubDiv").classList.add("dn");
        form.classList.add("dn");
        anothForm.classList.add("dn");
        document.querySelector("body").classList.remove("bodyLock");
    })


    // fetching form details : 

    let dishName = document.getElementById("dish_name");
    // let stars  = document.getElementById("stars");
    // let ratings = document.getElementById("ratings");
    let dishPrice = document.getElementById("item_price")
    let description  = document.getElementById("description");
    let link  = document.getElementById("link");
    let category  = document.getElementById("category");
    let submit = document.getElementById("submit");
    
    // "/assets/masala oats.jpg"

    let formArray=[];

    form.addEventListener("submit",(e)=>{
        e.preventDefault();

        let details = {
            dish_name: dishName.value,
            item_price:dishPrice.value,
            description: description.value,
            image_link: link.value,
            category: category.value
        }

        formArray.push(details);
        
        let check = category.value;

         dishName.value="";
         dishPrice.value="";
         description.value="";
         link.value="";
         category.value="";
         
         let url;

        if(check=="breakfast"){
            url="http://localhost:3000/breakfasts";
        }

        else if(check=="lunch"){
            url="http://localhost:3000/lunchs";
        }

        else if(check=="snacks"){
            url="http://localhost:3000/snacks";
        }

        else if(check=="dinner"){
            url="http://localhost:3000/dinners";
        }

        let convertedBlog = JSON.stringify(details);

        fetch(url,{method:"post",headers:{'Content-Type':'application/json'}, body:convertedBlog})
        .then((value)=>{
            console.log(value);
            alert("Succesfully Posted the item!")
        }).catch((err)=>{
            console.log("some error occured while posting details to the server!");
            alert("failed to post the menu item, please try again!")
        })
    })



    // fetching details of recipes from json server
    
    // fetching breakfast values
    async function getBreakfast(){

        try{

            let info = await fetch(" http://localhost:3000/breakfasts",{method:"GET"});
    
            let res = await info.json();
    
            return res;
        }

        catch(error){
            console.log("some error occured while fetching the data from the server!")
        }
    
        
    }

    // now inserting those values inside an array
    let getBreakfastValues=[];
    getBreakfast().then((value)=>{
        value.forEach((e)=>{
            getBreakfastValues.push(e);
        })
    })

    // fetching lunch values
    async function getLunch(){
    
        try{
            let info = await fetch(" http://localhost:3000/lunchs",{method:"GET"});

            let res = await info.json();
            
            return res;
        }

        catch(error){
            console.log("some error occured while fetching the data from the server!")
        }
        
    }
    
    // inserting those values inside another array
    let getLunchValues=[];
    getLunch().then((value)=>{
        value.forEach((e)=>{
        getLunchValues.push(e);
        })
    })


    // fetching snack values
    async function getSnacks(){
    
        try{

            let info = await fetch(" http://localhost:3000/snacks",{method:"GET"});
    
            let res = await info.json();
    
            return res;
        }
        catch(error){
            console.log("some error occured while fetching the data from the server!")
        }
        
    }
    
    // inserting these values inside another array
    let getSnackValues=[];
    getSnacks().then((value)=>{
        value.forEach((e)=>{
        getSnackValues.push(e);
    })
    })


    // getting dinner values from the server : -
    async function getDinner(){
    
        try{

            let info = await fetch(" http://localhost:3000/dinners",{method:"GET"});
    
            let res = await info.json();
    
            return res;
        }
        catch(error){
            console.log("some error occured while fetching the data from the server!")
        }

    }

    // inserting those values inside another array
    let getDinnerValues=[];
    getDinner().then((value)=>{
        value.forEach((e)=>{
        getDinnerValues.push(e);
        })
    })


    // function to remove the existing children of a parent element 
    const removeChilds = (parent) => {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    };
    
    


 // function to generate the dishes which are present inside the breakfast section    
    function generateBreakFast(){
        
        let mainDiv = document.querySelector("#breakfastMainDivBox");
        let header = document.querySelector("#breakfastHead")
        removeChilds(mainDiv);
        


        for(let i=0;i<getBreakfastValues.length;i++){

            let elId = getBreakfastValues[i].id;
            let element = document.createElement('div');
            // element.setAttribute("id", "breakfast"+elId);
            element.id="breakfast"+elId;
            element.classList.add("item-list");
    
            let ccctt = element.id;
            let cctt33 = ccctt.slice(0,ccctt.length-1);
            console.log(cctt33);
    
            let price = getBreakfastValues[i].item_price;
            let myLink = getBreakfastValues[i].image_link;
            let myDish = getBreakfastValues[i].dish_name;
            let desc = getBreakfastValues[i].description;
    

    
            element.innerHTML=`<a href=""><img src="${myLink}" alt=""></a>
            <span class="content-nav-font"> <a href=""><b>${myDish}</b></a> </span>
            <br>
            <span class="content_font"><b>${desc}</b></span>
            <br>
            <span class="content-nav-font">Price : ${price}₹</span>
            <span class="content-nav-font" style="padding-bottom:2rem;"> <button class="editMenu">Edit</button> <button class="deleteMenu">Delete</button> </span>`


            mainDiv.appendChild(element);
            console.log(element);

            breakfast.classList.remove("selected");
            mainDiv.classList.remove("dn");
            header.classList.remove("dn");

    }
}


// function to generate the dishes which are present inside the Lunch section    
function generateLunch(){
        
    let mainDiv = document.querySelector("#lunchMainDivBox");
    let header = document.querySelector("#lunchHead");
    removeChilds(mainDiv);



    for(let i=0;i<getLunchValues.length;i++){

        let elId = getLunchValues[i].id;
        let element = document.createElement('div');
            element.id = "lunch"+elId;
            element.classList.add("item-list");
    
            let price = getLunchValues[i].item_price;
            let myLink = getLunchValues[i].image_link;
            let myDish = getLunchValues[i].dish_name;
            let desc = getLunchValues[i].description;
    

    
            element.innerHTML=`<a href=""><img src="${myLink}" alt=""></a>
            <span class="content-nav-font"> <a href=""><b>${myDish}</b></a> </span>
            <br>
            <span class="content_font"><b>${desc}</b></span>
            <br>
            <span class="content-nav-font">Price : ${price}₹</span>
            <span class="content-nav-font" style="padding-bottom:2rem;"> <button class="editMenu">Edit</button> <button class="deleteMenu">Delete</button> </span>`


        mainDiv.appendChild(element);
        console.log(element);

        lunch.classList.remove("selected");
        mainDiv.classList.remove("dn");
        header.classList.remove("dn");

}
}


// function to generate the dishes which are present inside the Snacks section    
function generateSnacks(){
        
    let mainDiv = document.querySelector("#snacksMainDivBox");
    let header = document.querySelector("#snacksHead");
    removeChilds(mainDiv);


    for(let i=0;i<getSnackValues.length;i++){

        let elId = getSnackValues[i].id;
        let element = document.createElement('div');
            element.id="snacks"+elId;
            element.classList.add("item-list");
    
            let price = getSnackValues[i].item_price;
            let myLink = getSnackValues[i].image_link;
            let myDish = getSnackValues[i].dish_name;
            let desc = getSnackValues[i].description;
    

    
            element.innerHTML=`<a href=""><img src="${myLink}" alt=""></a>
            <span class="content-nav-font"> <a href=""><b>${myDish}</b></a> </span>
            <br>
            <span class="content_font"><b>${desc}</b></span>
            <br>
            <span class="content-nav-font">Price : ${price}₹</span>
            <span class="content-nav-font" style="padding-bottom:2rem;"> <button class="editMenu">Edit</button> <button class="deleteMenu">Delete</button> </span>`


        mainDiv.appendChild(element);
        console.log(element);

        snacks.classList.remove("selected");
        mainDiv.classList.remove("dn");
        header.classList.remove("dn");

}
}


// function to generate the dishes which are present inside the Dinner section    
function generateDinner(){
        
    let mainDiv = document.querySelector("#dinnerMainDivBox");
    let header = document.querySelector("#dinnerHead")
    removeChilds(mainDiv);



    for(let i=0;i<getDinnerValues.length;i++){

        let elId = getDinnerValues[i].id;
        let element = document.createElement('div');
            element.id="dinner"+elId;
            element.classList.add("item-list");
    
            let price = getDinnerValues[i].item_price;
            let myLink = getDinnerValues[i].image_link;
            let myDish = getDinnerValues[i].dish_name;
            let desc = getDinnerValues[i].description;
    

    
            element.innerHTML=`<a href=""><img src="${myLink}" alt=""></a>
            <span class="content-nav-font"> <a href=""><b>${myDish}</b></a> </span>
            <br>
            <span class="content_font"><b>${desc}</b></span>
            <br>
            <span class="content-nav-font">Price : ${price}₹</span>
            <span class="content-nav-font" style="padding-bottom:2rem;"> <button class="editMenu">Edit</button> <button class="deleteMenu">Delete</button> </span>`


        mainDiv.appendChild(element);
        console.log(element);

        dinner.classList.remove("selected");
        mainDiv.classList.remove("dn");
        header.classList.remove("dn");

}
}

// function generateAll recipes

    function generateAllRecipes(){

        let mainDiv1 = document.querySelector("#breakfastMainDivBox");
        let header1 = document.querySelector("#breakfastHead")
        removeChilds(mainDiv1);

        let mainDiv2 = document.querySelector("#lunchMainDivBox");
        let header2 = document.querySelector("#lunchHead")
        removeChilds(mainDiv2);

        let mainDiv3 = document.querySelector("#snacksMainDivBox");
        let header3 = document.querySelector("#snacksHead")
        removeChilds(mainDiv3);

        let mainDiv4 = document.querySelector("#dinnerMainDivBox");
        let header4 = document.querySelector("#dinnerHead")
        removeChilds(mainDiv4);



        // The loop for breakfast 
        for(let i=0;i<getBreakfastValues.length;i++){

            let elId = getBreakfastValues[i].id;
            let element = document.createElement('div');
            element.id="breakfast"+elId;
            element.classList.add("item-list");
    
            let price = getBreakfastValues[i].item_price;
            let myLink = getBreakfastValues[i].image_link;
            let myDish = getBreakfastValues[i].dish_name;
            let desc = getBreakfastValues[i].description;
    

    
            element.innerHTML=`<a href=""><img src="${myLink}" alt=""></a>
            <span class="content-nav-font"> <a href=""><b>${myDish}</b></a> </span>
            <br>
            <span class="content_font"><b>${desc}</b></span>
            <br>
            <span class="content-nav-font">Price : ${price}₹</span>
            <span class="content-nav-font" style="padding-bottom:2rem;"> <button class="editMenu">Edit</button> <button class="deleteMenu">Delete</button> </span>`
        
        
                mainDiv1.appendChild(element);
                console.log(element);
        
                //dinner.classList.remove("selected");
                mainDiv1.classList.remove("dn");
                header1.classList.remove("dn");
        
        }


    // The loop for lunch
    
    for(let i=0;i<getLunchValues.length;i++){

        let elId = getLunchValues[i].id;
        let element = document.createElement('div');
        element.id="lunch"+elId;
        element.classList.add("item-list");

        let price = getLunchValues[i].item_price;
        let myLink = getLunchValues[i].image_link;
        let myDish = getLunchValues[i].dish_name;
        let desc = getLunchValues[i].description;



        element.innerHTML=`<a href=""><img src="${myLink}" alt=""></a>
        <span class="content-nav-font"> <a href=""><b>${myDish}</b></a> </span>
        <br>
        <span class="content_font"><b>${desc}</b></span>
        <br>
        <span class="content-nav-font">Price : ${price}₹</span>
        <span class="content-nav-font" style="padding-bottom:2rem;"> <button class="editMenu">Edit</button> <button class="deleteMenu">Delete</button> </span>`
    
    
            mainDiv2.appendChild(element);
            console.log(element);
    
            //dinner.classList.remove("selected");
            mainDiv2.classList.remove("dn");
            header2.classList.remove("dn");
    
    }

    // The loop for snacks

    for(let i=0;i<getSnackValues.length;i++){

        let elId = getSnackValues[i].id;
        let element = document.createElement('div');
            element.id="snacks"+elId;
            element.classList.add("item-list");
    
            let price = getSnackValues[i].item_price;
            let myLink = getSnackValues[i].image_link;
            let myDish = getSnackValues[i].dish_name;
            let desc = getSnackValues[i].description;
    

    
            element.innerHTML=`<a href=""><img src="${myLink}" alt=""></a>
            <span class="content-nav-font"> <a href=""><b>${myDish}</b></a> </span>
            <br>
            <span class="content_font"><b>${desc}</b></span>
            <br>
            <span class="content-nav-font">Price : ${price}₹</span>
            <span class="content-nav-font" style="padding-bottom:2rem;"> <button class="editMenu">Edit</button> <button class="deleteMenu">Delete</button> </span>`
    
    
            mainDiv3.appendChild(element);
            console.log(element);
    
            //dinner.classList.remove("selected");
            mainDiv3.classList.remove("dn");
            header3.classList.remove("dn");
    
    }

    // The loop for dinner

    for(let i=0;i<getDinnerValues.length;i++){

            let elId = getDinnerValues[i].id;
            let element = document.createElement('div');
            element.id="dinner"+elId;
            element.classList.add("item-list");
    
            let price = getDinnerValues[i].item_price;
            let myLink = getDinnerValues[i].image_link;
            let myDish = getDinnerValues[i].dish_name;
            let desc = getDinnerValues[i].description;
    

    
            element.innerHTML=`<a href=""><img src="${myLink}" alt=""></a>
            <span class="content-nav-font"> <a href=""><b>${myDish}</b></a> </span>
            <br>
            <span class="content_font"><b>${desc}</b></span>
            <br>
            <span class="content-nav-font">Price : ${price}₹</span>
            <span class="content-nav-font" style="padding-bottom:2rem;"> <button class="editMenu">Edit</button> <button class="deleteMenu">Delete</button> </span>`
    
    
            mainDiv4.appendChild(element);
            console.log(element);
    
            //dinner.classList.remove("selected");
            mainDiv4.classList.remove("dn");
            header4.classList.remove("dn");
    
    }
        
    }
    

    // Now displaying those values inside html : 
    let selectButton = document.querySelector("#showSelectedResults")
    selectButton.addEventListener("click",()=>{

        dynamicHeader.classList.add("dn");
        dynamicMainDivBox.classList.add("dn");

        if(breakfast.classList.contains("selected")){
            generateBreakFast();
            selectButton.classList.add("dn");

            document.querySelector("#snacksHead").classList.add("dn");
            document.querySelector("#snacksMainDivBox").classList.add("dn");
            document.querySelector("#lunchHead").classList.add("dn");
            document.querySelector("#lunchMainDivBox").classList.add("dn");
            document.querySelector("#dinnerHead").classList.add("dn");
            document.querySelector("#dinnerMainDivBox").classList.add("dn");
        }

        else if(lunch.classList.contains("selected")){
            generateLunch();
            selectButton.classList.add("dn");

            document.querySelector("#snacksHead").classList.add("dn");
            document.querySelector("#snacksMainDivBox").classList.add("dn");
            document.querySelector("#breakfastHead").classList.add("dn");
            document.querySelector("#breakfastMainDivBox").classList.add("dn");
            document.querySelector("#dinnerHead").classList.add("dn");
            document.querySelector("#dinnerMainDivBox").classList.add("dn");
        }

        else if(snacks.classList.contains("selected")){
            generateSnacks();
            selectButton.classList.add("dn");

            document.querySelector("#breakfastHead").classList.add("dn");
            document.querySelector("#breakfastMainDivBox").classList.add("dn");
            document.querySelector("#lunchHead").classList.add("dn");
            document.querySelector("#lunchMainDivBox").classList.add("dn");
            document.querySelector("#dinnerHead").classList.add("dn");
            document.querySelector("#dinnerMainDivBox").classList.add("dn");
        }

        else if(dinner.classList.contains("selected")){
            generateDinner();
            selectButton.classList.add("dn");

            document.querySelector("#snacksHead").classList.add("dn");
            document.querySelector("#snacksMainDivBox").classList.add("dn");
            document.querySelector("#lunchHead").classList.add("dn");
            document.querySelector("#lunchMainDivBox").classList.add("dn");
            document.querySelector("#breakfastHead").classList.add("dn");
            document.querySelector("#breakfastMainDivBox").classList.add("dn");
        }

        deletetingItems();
        editingItems();

        
        
    })



    // displaying all recipees

    allFoodBtn.addEventListener("click",()=>{

    dynamicHeader.classList.add("dn");
    dynamicMainDivBox.classList.add("dn");        
    generateAllRecipes();

        selectButton.classList.add("dn");

        deletetingItems();
        editingItems();
        
    })


    
    // showing the search results : -
    
    let searchForm = document.getElementById("formSearch");
    
    searchForm.addEventListener("submit",(e)=>{
        e.preventDefault();

        let resultArray=[];
        
    let key = e.target.searchKey.value;

    e.target.searchKey.value='';

    let regex = new RegExp(key);

 
    for(let i=0;i<getBreakfastValues.length;i++){

        let myDish1 = (getBreakfastValues[i].dish_name).toLowerCase();
        let got = myDish1.match(regex);

        
        if(got!=null){
            let pushDetails={}
            pushDetails.index=i;
            pushDetails.dish=got.input;
            pushDetails.category="breakfast";

            resultArray.push(pushDetails);
    
    }
        }

    

    for(let i=0;i<getLunchValues.length;i++){

        let myDish = (getLunchValues[i].dish_name).toLowerCase();
        let got = myDish.match(regex);
        
        if(got!=null){
            let pushDetails={}
            pushDetails.index=i;
            pushDetails.dish=got.input;
            pushDetails.category="lunch";

            resultArray.push(pushDetails);
        }

    }

    for(let i=0;i<getSnackValues.length;i++){

        let myDish = (getSnackValues[i].dish_name).toLowerCase();
        let got = myDish.match(regex);
        
        if(got!=null){
            let pushDetails={}
            pushDetails.index=i;
            pushDetails.dish=got.input;
            pushDetails.category="snacks";

            resultArray.push(pushDetails);
        }

    }

    for(let i=0;i<getDinnerValues.length;i++){

        let myDish = (getDinnerValues[i].dish_name).toLowerCase();
        let got = myDish.match(regex);
        
        if(got!=null){
            let pushDetails={}
            pushDetails.index=i;
            pushDetails.dish=got.input;
            pushDetails.category="dinner";

            resultArray.push(pushDetails);
        }

    }

    
    console.log(resultArray)
    
        
        showSearchResults(key,resultArray);
    
    
    
    
})


// function which shows search results to the user 
function showSearchResults(query,resultArray){

    let header = dynamicHeader;
    let mainDiv = dynamicMainDivBox;

    if(resultArray.length==0){
        header.children[0].innerHTML=` No Results found for ${query} `;
        mainDiv.innerHTML="";
        return;
    }

    header.children[0].innerHTML="Search Results for "+query;
    console.log(header.innerHTML)

    
    let i=0;
    
    // removeChilds(mainDiv);  
    mainDiv.innerHTML="";               
    console.log("clear")
    


    resultArray.forEach((e)=>{
    i++;


        let element = document.createElement('div');
        element.classList.add("item-list");
        
        let res="";
        
        let ind=e.index;
        if(e.category=="breakfast"){
            res=getBreakfastValues[ind];
            let elId = res.id;
            element.id=e.category+""+elId;
        }
        
        else if(e.category=="lunch"){
            res=getLunchValues[ind];
            let elId = res.id;
            element.id=e.category+""+elId;
        }
        
        else if(e.category=="snacks"){
            res=getSnackValues[ind];
            let elId = res.id;
            element.id=e.category+""+elId;
        }
        
        else if(e.category=="dinner"){
            res=getDinnerValues[ind];
            let elId = res.id;
            element.id=e.category+""+elId;
        }
        

      
        let price = res.item_price;
        let myLink = res.image_link;
        let myDish = res.dish_name;        
        let desc = res.description;


        element.innerHTML=`<a href=""><img src="${myLink}" alt=""></a>
        <span class="content-nav-font"> <a href=""><b>${myDish}</b></a> </span>
        <br>
        <span class="content_font"><b>${desc}</b></span>
        <br>
        <span class="content-nav-font">Price : ${price}₹</span>
        <span class="content-nav-font" style="padding-bottom:2rem;"> <button class="editMenu">Edit</button> <button class="deleteMenu">Delete</button> </span>`


        mainDiv.appendChild(element);
        console.log(element);

        //dinner.classList.remove("selected");
        mainDiv.classList.remove("dn");
        header.classList.remove("dn");

        document.querySelector("#breakfastHead").classList.add("dn");
        document.querySelector("#lunchHead").classList.add("dn");
        document.querySelector("#snacksHead").classList.add("dn");
        document.querySelector("#dinnerHead").classList.add("dn");
        document.querySelector("#breakfastMainDivBox").classList.add("dn");
        document.querySelector("#lunchMainDivBox").classList.add("dn");
        document.querySelector("#snacksMainDivBox").classList.add("dn");
        document.querySelector("#dinnerMainDivBox").classList.add("dn");
        
    })

    deletetingItems();
    editingItems();
}






// function for performing the delete operation, using fetch 'DELETE' method
function deletetingItems(){

let el = document.querySelectorAll(".deleteMenu"); 
let len1 = el.length; 
// console.log(el)
console.log(len1)

for(let i=0;i<len1;i++){ 
    el[i].addEventListener("click",(e)=>{ 
        console.log("alert")
        let ans = confirm("Are you sure to delete this item?"); 
        if(ans){
            let y = el[i].parentElement.parentElement;
            console.log(y)

            let url;
            let idc = y.id;
            let category=idc.slice(0,idc.length-1);
            let delId = idc[idc.length-1];

            if(category=="breakfast"){
               url=`http://localhost:3000/breakfasts/${delId}`
            }

            else if(category=="lunch"){
                url=`http://localhost:3000/lunchs/${delId}`
            }

            else if(category=="snacks"){
                url=`http://localhost:3000/snacks/${delId}`
            }

            else if(category=="dinner"){
                url=`http://localhost:3000/dinners/${delId}`
            }

            console.log("url is :"+url)

            fetch(url, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((value)=>{
                
                y.remove();

                setTimeout(() => {
                 alert("Item deleted succesfully!");
                }, 200);
                
              }).catch((err)=>{
                alert("Failed to delete the item, please try again!");
              })
             
            }

             else{
                
            }
          })

         } 

    }


// function for editing the current already existing menu items. Here, we are using PATCH method inside fetch API.
    function editingItems(){

        let el = document.querySelectorAll(".editMenu"); 
        let len1 = el.length; 
        let form2 = document.getElementById("form2");
        let dishName = document.getElementById("dish_name2");
        let dishPrice= document.getElementById("item_price2")
        let description  = document.getElementById("description2");
        let link  = document.getElementById("link2");
        let category2  = document.getElementById("category2");
        let submit = document.getElementById("submit2");

        console.log(el)

    for(let i=0;i<len1;i++){ 
    el[i].addEventListener("click",(e)=>{ 

        let y = el[i].parentElement.parentElement;

        let nameOfDish = y.children[1].innerText;
        let descrip = y.children[3].innerText;
        let price = y.children[5].innerText.slice(8);
        price = parseInt(price.slice(0,price.length-1));
        let imgLink=y.children[0].children[0].src;
        let idc1 = y.id;
        let categoryDish = idc1.slice(0,idc1.length-1);
        let delId1 = idc1[idc1.length-1];


        // displaying form popup
        scrollToTop();  // calling scroll top function to get to the start of the page: 
        document.querySelector(".formSubDiv").classList.remove("dn");
        form2.classList.remove("dn");
        document.getElementById("form").classList.add("dn")

        // setTimeout(()=>{
        //     document.querySelector("body").classList.add("bodyLock")
        // },1000)


            dishName.value=nameOfDish;
            dishPrice.value=price;
            description.value=descrip;
            link.value=imgLink;
            category2.value=categoryDish;

         form2.addEventListener("submit",(e)=>{
                e.preventDefault();

        let details = {
            dish_name: dishName.value,
            item_price:dishPrice.value,
            description: description.value,
            image_link: link.value,
            category: category2.value
        }

        
        let check = category2.value;

         dishName.value="";
         dishPrice.value="";
         description.value="";
         link.value="";
         category2.value="";
         
         let url;

        if(check=="breakfast"){
            url=`http://localhost:3000/breakfasts/${delId1}`;
        }

        else if(check=="lunch"){
            url=`http://localhost:3000/lunchs/${delId1}`;
        }

        else if(check=="snacks"){
            url=`http://localhost:3000/snacks/${delId1}`;
        }

        else if(check=="dinner"){
            url=`http://localhost:3000/dinners/${delId1}`;
        }

        let convertedBlog = JSON.stringify(details);

        fetch(url, {method: 'PATCH',body: convertedBlog,headers: {'Content-type': 'application/json; charset=UTF-8'}})
        .then((value)=>{
            console.log(value);
        }).then(()=>{
                alert("Item Updated succesfully!")
            
        }).catch((err)=>{
            console.log("some error occured while posting details to the server!");
            alert("Failed to delete the item, please try again!");
        })
            })   
            
          })

         } 

    }


    // function to scroll on top : 
    function scrollToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.querySelector("body").classList.add("bodyLock")
    }