
// get the Links Elements
const getNavItems = document.getElementsByClassName("list-items");

// Iliterate oover the link Element to know the button that was clicked
for (let i = 0; i < getNavItems.length; i++) {
  let btn = getNavItems.item(i)

// Add Event Listenet to the button clicked
  btn.addEventListener('click',()=> {  
    // Get the display div children from the dom
     let cardList = document.querySelector('.display_items').children

    //  If the Card in the cardList has a show class, remove it
    for(let i = 0; i < cardList.length; i++){
      if(cardList[i].getAttribute('class').includes('show')){
        removeShow(cardList[i])
      }
    }
          //Store it as a variable - dataFilterAttr//
     let dataFilterAttr = btn.getAttribute('data-filter')

             DisplayPhotoGalary(dataFilterAttr)
  })
  
  }

          //Function to display photo
    const DisplayPhotoGalary= getDataFilter=> {
        // Get all the photo card from the dom
      const getCardList = document.querySelectorAll(getDataFilter)
           // Loop over the cards list
           for(let i = 0; i < getCardList.length; i++){
            //  get the class of the card component and slipt them into an array of classes
            let getCard  = getCardList[i].getAttribute('class').split(' ');
            // If the linked clicked is not all, then remove all from the array the convert the array pack into a string
            if(getDataFilter !== '.all') {
              getCard.splice(0, 1)
              getCardString = getCard.join( )
              for(let i = 0; i < getCardList.length; i++){  
                // if the card has class of show, remove it then add it back. This is just to clear the class so that previous clicked items are not showing up before a new clicked              
                removeShow(getCardList[i])
                addShow(getCardList[i])
            }
              
            }else {
              // if the button clicked is an Array, then show all photo
              for(let i = 0; i < getCardList.length; i++){
                addShow(getCardList[i])
              }
            }
          
           }

          }
const removeShow = element => element. classList.remove('show')
const addShow = element => element.classList.add('show')
DisplayPhotoGalary('.all')