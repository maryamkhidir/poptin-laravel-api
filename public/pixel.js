var w = window.location; var h = `${w.protocol}//${w.hostname}`; var p = w.port;
if(p != "80") h= `${h}:${p}`

var e = document.createElement("link");
e.setAttribute("rel", "stylesheet");
e.setAttribute("type", "text/css");
var s = document.getElementById("poptin-pixel-script").src; var u = new URL(s);
if(u === null ||u === undefined) u = new URL(s,h);

var v = u.origin
e.setAttribute("href", `${v}/poptin-pixel.css`);
document.getElementsByTagName("head")[0].appendChild(e);

var pi = 'poptin-pixel-id'
let i = u.searchParams.get(pi)

if(i){
  var g = `${v}/api/popups/${i}`; var opt = {mode:'cors'}

  fetch(g,opt)
    .then((response) => {
      if(!response.ok) {
        throw new Error('Erroneous response was received');
      }
      return response.json();
    })
    .then((data) => {

      let d = data

      let p = document.createElement('div');
      p.setAttribute('class','popup');
      p.setAttribute('id', 'pixel-popup');

      let pc = document.createElement('div');
      pc.setAttribute('class','popup--container');
      pc.style = `background: ${d.background}`

      let pci = document.createElement('div');
      pci.setAttribute('class','popup--container__inner');
      
      let pcw = document.createElement('div');
      pcw.setAttribute('class','popup--container__wrapper');

      let pcc = document.createElement('div');
      pcc.setAttribute('class','popup--container__content');

      let pccw = document.createElement('div');
      pccw.setAttribute('class','popup--container__content-wrapper');
      p.appendChild(pc)
      pc.appendChild(pci)
      pci.appendChild(pcw)
      pcw.appendChild(pcc)
      pcc.appendChild(pccw)

      let ts = document.createElement('div');
      ts.setAttribute('class','three-stars');  
      
      let s1 = document.createElement('span');
      s1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${d.badgeColor}"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path></svg>`

      let s2 = document.createElement('span');
      s2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${d.badgeColor}"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path></svg>`

      let s3 = document.createElement('span');
      s3.innerHTML  = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${d.badgeColor}"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path></svg>`;

      ts.append(s1,s2,s3);

      let t = document.createElement('div');
      t.setAttribute('class','title');
      t.innerHTML = d.title

      let i = document.createElement('input');
      i.placeholder = d.placeholder

      let b = document.createElement('button');
      b.type = "button";
      b.innerHTML = d.button_text

      let ft = document.createElement('div');
      ft.innerHTML = d.footnote

      //display according to order
      let order = JSON.parse(d.el_order)
      let k = []
      for(let i=0; i<order.length; i++){
         k.push(order[i].name)
      }
      for(n of k){
        switch (n) {
          case 'Title':
            pccw.appendChild(t);
            break;
          case 'Badge':
            pccw.appendChild(ts);
            break;
          case 'Input':
            pccw.appendChild(i);
            break;
          case 'Subtext':
            pccw.appendChild(ft);
            break;
          case 'Button':
            pccw.appendChild(b);
            break;
          default:
            break;
          }
      }

      //add wrapper
      let w = document.createElement('div');
      w.setAttribute('class','poptin-wrapper')
      w.appendChild(p)

      document.body.insertAdjacentElement("afterbegin", w)
    }) 
    .catch(err => {
      throw new Error('Error response was recieved');
    })
  }

  window.addEventListener('resize', reportWindowSize);

  function reportWindowSize() {
    const pr = document.getElementById('pixel-popup');
    const width = window.innerWidth
    if(pr && width < 550) {
      var s = (width/550).toFixed(2);
      pr.style = `transform: scale(${s})`
    }
  }
