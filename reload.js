function implantbrowser(...arg){
  let browser = document.getElementById("iframe1")
  if(arg[0]=="reload"){
    browser.outerHTML=browser.outerHTML
  }
}