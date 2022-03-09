class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  setElementsPosition(){
    this.titleImg.position(120,0)
    this.input.position(width/2-110, height /2 -80)
    this.playButton.position(width/2 -90, height/2 -20)
    this.greeting.position(width/2 -300, height/2 -100)
  }

  setElementsStyle(){
    this.greeting.class("greeting")
    this.input.class("customInput")
    this.playButton.class("customButton")
    this.titleImg.class("gameTitle")
  }

  display(){
    this.setElementsPosition()
    this.setElementsStyle()
  }

}
