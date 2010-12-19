var Overlay = Class.create({
  initialize: function(){
    this.isVisible = false;
    this.build();
    this.addListeners();
  },
  addListeners: function(){
    Element.observe(window, 'resize', this.onResize.bind(this));
    this.overlay.on('click', 'div.overlay', this.onClick.bind(this));
  },
  build: function(){
    this.overlay = new Element('div', { 'class': 'overlay' });
    $(document.body).insert(this.overlay);
  },
  hideOverlay: function(){
    this.overlay.setStyle({
      height: 0
    });
    this.isVisible = false;
  },
  onClick: function(){
    this.hideOverlay();
  },
  onResize: function(){
    if(this.isVisible){
      this.resize();
    }
  },
  resize: function(){
    var dims = document.viewport.getDimensions();
    this.overlay.setStyle({
      height: dims.height+'px',
      width: dims.width+'px'
    });
  },
  showOverlay: function(){
    this.resize();
    this.isVisible = true;
  }
});