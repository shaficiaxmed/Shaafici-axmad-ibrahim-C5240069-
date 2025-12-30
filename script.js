/**
 * PROJECT: JavaScript Chapters 7-9 Portfolio
 * STUDENT: Shaafici Axmed Ibraahim
 * ID: C6240421
 * UNIVERSITY: JUST University
 * TEACHER: Jamilla Hassan Mohamett
 */

// ===== THEME & STYLING =====
const PRIMARY_COLOR = "#1a73e8"; 
const DARK_BG = "#1a1b1e";

document.body.style.margin = "0";
document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
document.body.style.backgroundColor = "#f0f2f5";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.minHeight = "100vh";

const styleTag = document.createElement("style");
styleTag.textContent = `
  .chapter-btn { 
    display: flex; align-items: center; justify-content: space-between;
    background: white; padding: 25px; border-radius: 12px; margin-bottom: 15px;
    cursor: pointer; border: 1px solid #ddd; transition: 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
  .chapter-btn:hover { 
    transform: translateX(10px); border-color: ${PRIMARY_COLOR}; 
    box-shadow: 0 6px 15px rgba(26,115,232,0.2); 
  }
  .chapter-icon { font-size: 30px; margin-right: 20px; color: ${PRIMARY_COLOR}; font-weight: bold; }
  .chapter-info { flex-grow: 1; text-align: left; }
  .chapter-info h2 { margin: 0; color: #333; font-size: 20px; }
  .chapter-info p { margin: 5px 0 0; color: #666; font-size: 14px; }
  
  pre { background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 14px; margin: 10px 0; }
  .example-div { border: 1px solid #eee; padding: 20px; margin-bottom: 20px; background: white; border-radius: 10px; }
  .nav-link { color: white; padding: 15px 20px; text-decoration: none; font-weight: bold; cursor: pointer; }
  .nav-link:hover { background: rgba(255,255,255,0.15); }
  
  #sidebar { position: fixed; left: -260px; top: 0; width: 250px; height: 100%; background: ${DARK_BG}; color: white; transition: 0.3s; z-index: 1001; padding-top: 60px; }
  #sidebar a { display: block; color: #ccc; padding: 15px 25px; text-decoration: none; border-bottom: 1px solid #333; }
  #overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: none; z-index: 1000; }
`;
document.head.appendChild(styleTag);

// ===== SIDEBAR & OVERLAY =====
const sidebar = document.createElement("div");
sidebar.id = "sidebar";
sidebar.innerHTML = `<h3 style="text-align:center; color:${PRIMARY_COLOR}">MENU</h3>`;
document.body.appendChild(sidebar);

const overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);

const menuBtn = document.createElement("button");
menuBtn.innerHTML = "☰";
menuBtn.style.cssText = `position:fixed; top:12px; left:12px; z-index:1002; background:${PRIMARY_COLOR}; color:white; border:none; padding:8px 12px; font-size:20px; cursor:pointer; border-radius:4px;`;
document.body.appendChild(menuBtn);

function toggleMenu() {
  const isOpen = sidebar.style.left === "0px";
  sidebar.style.left = isOpen ? "-260px" : "0px";
  overlay.style.display = isOpen ? "none" : "block";
}
menuBtn.onclick = toggleMenu;
overlay.onclick = toggleMenu;

// ===== HEADER & NAVIGATION =====
const header = document.createElement("header");
header.style.cssText = `background:${PRIMARY_COLOR}; color:white; padding:15px; text-align:center; font-size:20px; font-weight:bold;`;
header.textContent = "JAVA SCRIPT";
document.body.appendChild(header);

const nav = document.createElement("nav");
nav.style.cssText = `background:#202124; display:flex; justify-content:center; position:sticky; top:0; z-index:999;`;
document.body.appendChild(nav);

["home", "about", "contact"].forEach(page => {
  const tLink = document.createElement("a");
  tLink.className = "nav-link";
  tLink.textContent = page.toUpperCase();
  tLink.onclick = () => loadPage(page);
  nav.appendChild(tLink);

  const sLink = document.createElement("a");
  sLink.textContent = page.toUpperCase();
  sLink.href = "#";
  sLink.onclick = (e) => { e.preventDefault(); loadPage(page); toggleMenu(); };
  sidebar.appendChild(sLink);
});

const main = document.createElement("main");
main.style.cssText = "flex:1; padding:30px 15px; max-width:800px; margin:0 auto; width:100%;";
document.body.appendChild(main);

// ===== CHAPTER DATA (Same as provided) =====
const chaptersData = {
  chapter7: { title: "Chapter 7: JavaScript Objects", examples: [
    { title: "Object Literal", code: `const user = {name:"Shaafici", age:22}; return user.name;` },
    { title: "Dot Access", code: `const car = {make:"bmw"}; return car.make;` },
    { title: "Bracket Access", code: `const st = {id:"C5240069"}; return st["id"];` },
    { title: "Add Property", code: `const o = {}; o.color="Red"; return o.color;` },
    { title: "Delete Prop", code: `const o = {a:1, b:2}; delete o.a; return JSON.stringify(o);` },
    { title: "Method Call", code: `const o = {greet(){return "Hi!"}}; return o.greet();` },
    { title: "Nested Object", code: `const o = {a:{b:5}}; return o.a.b;` },
    { title: "Object.keys", code: `return Object.keys({x:1, y:2});` },
    { title: "Object.values", code: `return Object.values({x:1, y:2});` },
    { title: "Object.entries", code: `return JSON.stringify(Object.entries({a:1}));` },
    { title: "JSON Stringify", code: `return JSON.stringify({id:101});` },
    { title: "JSON Parse", code: `return JSON.parse('{"status":"OK"}').status;` },
    { title: "In Operator", code: `return "age" in {age:20};` },
    { title: "Object Assign", code: `return JSON.stringify(Object.assign({a:1},{b:2}));` },
    { title: "Spread Operator", code: `const a={x:1}; return JSON.stringify({...a, y:2});` },
    { title: "Freeze Object", code: `const o = {n:1}; Object.freeze(o); o.n=2; return o.n;` },
    { title: "Shorthand", code: `const name="Shaafici"; return JSON.stringify({name});` },
    { title: "Looping", code: `let res=""; for(let k in {a:1,b:2}) res+=k; return res;` },
    { title: "Destructuring", code: `const {id} = {id:77, n:"A"}; return id;` },
    { title: "HasOwnProp", code: `return {a:1}.hasOwnProperty("a");` }
  ]},
  chapter8: { title: "Chapter 8: DOCUMENT OBJECT MODEL", examples: [
    { title: "Change Text", html: "<div id='b1'>Old</div>", code: `document.getElementById('b1').innerText='Updated!';` },
    { title: "Text Color", html: "<p id='b2'>Color</p>", code: `document.getElementById('b2').style.color='blue';` },
    { title: "Background", html: "<div id='b3'>BG</div>", code: `document.getElementById('b3').style.background='yellow';` },
    { title: "Hide Element", html: "<div id='b4'>Hide</div>", code: `document.getElementById('b4').style.display='none';` },
    { title: "Show Element", html: "<div id='b5' style='display:none'>Show</div>", code: `document.getElementById('b5').style.display='block';` },
    { title: "innerHTML", html: "<div id='b6'></div>", code: `document.getElementById('b6').innerHTML='<b>Bold HTML</b>';` },
    { title: "Create Element", html: "<div id='b7'></div>", code: `const p = document.createElement('p'); p.innerText='New Child'; document.getElementById('b7').appendChild(p);` },
    { title: "Remove Element", html: "<div><span id='b8'>Delete Me</span></div>", code: `document.getElementById('b8').remove();` },
    { title: "Set Attribute", html: "<img id='b9' width='20'>", code: `document.getElementById('b9').setAttribute('width','100');` },
    { title: "Get Attribute", html: "<div id='b10' title='Useful'></div>", code: `return document.getElementById('b10').getAttribute('title');` },
    { title: "QuerySelector", html: "<p class='q'>Select Me</p>", code: `document.querySelector('.q').style.fontWeight='bold';` },
    { title: "Input Value", html: "<input id='b12' value='Hello'>", code: `return document.getElementById('b12').value;` },
    { title: "Parent Tag", html: "<div><i id='b13'></i></div>", code: `return document.getElementById('b13').parentNode.tagName;` },
    { title: "Children Count", html: "<ul id='b14'><li></li><li></li></ul>", code: `return document.getElementById('b14').children.length;` },
    { title: "Window Title", code: `document.title='JS Hub'; return document.title;` },
    { title: "Font Size", html: "<p id='b16'>Size</p>", code: `document.getElementById('b16').style.fontSize='30px';` },
    { title: "Visibility", html: "<div id='b17'>Visible</div>", code: `document.getElementById('b17').style.visibility='hidden';` },
    { title: "Opacity", html: "<div id='b18'>Fade</div>", code: `document.getElementById('b18').style.opacity='0.2';` },
    { title: "Border Change", html: "<div id='b19'>Box</div>", code: `document.getElementById('b19').style.border='2px solid red';` },
    { title: "Append Text", html: "<div id='b20'>Hello </div>", code: `document.getElementById('b20').append('World');` }
  ]},
  chapter9: { title: "Chapter 9: Events", examples: [
    { title: "On Click", html: "<button id='e1'>Click</button>", init: () => { document.getElementById('e1').onclick=()=>alert('Shaafici!'); } },
    { title: "Mouse Over", html: "<div id='e2' style='width:30px;height:30px;background:red'></div>", init: () => { document.getElementById('e2').onmouseover=function(){this.style.background='blue'}; } },
    { title: "Mouse Out", html: "<div id='e3' style='width:30px;height:30px;background:blue'></div>", init: () => { document.getElementById('e3').onmouseout=function(){this.style.background='red'}; } },
    { title: "On Input", html: "<input id='e4'> <p id='e4p'></p>", init: () => { document.getElementById('e4').oninput=function(){document.getElementById('e4p').innerText=this.value}; } },
    { title: "On Change", html: "<select id='e5'><option>A</option><option>B</option></select>", init: () => { document.getElementById('e5').onchange=function(){alert(this.value)}; } },
    { title: "On Focus", html: "<input id='e6'>", init: () => { document.getElementById('e6').onfocus=function(){this.style.outline='2px solid blue'}; } },
    { title: "Double Click", html: "<button id='e7'>DblClick</button>", init: () => { document.getElementById('e7').ondblclick=()=>alert('Double!'); } },
    { title: "On Copy", html: "<p id='e8'>Copy me</p>", init: () => { document.getElementById('e8').oncopy=()=>alert('Copied!'); } },
    { title: "Form Submit", html: "<form id='e9'><button>Submit</button></form>", init: () => { document.getElementById('e9').onsubmit=(e)=>{e.preventDefault(); alert('Blocked!');}; } },
    { title: "AddEventListener", html: "<button id='e10'>Listener</button>", init: () => { document.getElementById('e10').addEventListener('click',()=>alert('Active')); } },
    { title: "Context Menu", html: "<div id='e11'>Right Click</div>", init: () => { document.getElementById('e11').oncontextmenu=(e)=>{e.preventDefault(); alert('Menu');}; } },
    { title: "On Blur", html: "<input id='e12'>", init: () => { document.getElementById('e12').onblur=function(){this.style.background='pink'}; } },
    { title: "On Resize", code: `window.onresize=()=>console.log('Resizing'); return "Resize Window!";` },
    { title: "Key Down", html: "<input id='e14' placeholder='Press Key'>", init: () => { document.getElementById('e14').onkeydown=(e)=>console.log(e.key); } },
    { title: "Key Up", html: "<input id='e15' placeholder='Release Key'>", init: () => { document.getElementById('e15').onkeyup=()=>alert('Key Released'); } },
    { title: "Event Type", html: "<button id='e16'>Type</button>", init: () => { document.getElementById('e16').onclick=(e)=>alert(e.type); } },
    { title: "Form Reset", html: "<form id='e17'><input value='a'><button type='reset'>Reset</button></form>", init: () => { document.getElementById('e17').onreset=()=>alert('Reset'); } },
    { title: "Mouse Down", html: "<button id='e18'>Press</button>", init: () => { document.getElementById('e18').onmousedown=()=>alert('Down'); } },
    { title: "On Scroll", code: `window.onscroll=()=>console.log('Scrolling'); return "Scroll Window";` },
    { title: "On Paste", html: "<input id='e20' placeholder='Paste here'>", init: () => { document.getElementById('e20').onpaste=()=>alert('Pasted!'); } }
  ]}
};

// ===== PAGE ROUTING =====
function loadPage(pageKey) {
  main.innerHTML = "";
  window.scrollTo(0,0);

  if (pageKey === "home") {
    const listContainer = document.createElement("div");
    listContainer.style.marginTop = "20px";
    
    const order = [
      { id: 'chapter7', t: ' Objects', i: 'CH7', d: '' },
      { id: 'chapter8', t: ' DOCUMENT OBJECT MODEL', i: 'CH8', d: '' },
      { id: 'chapter9', t: 'EVENTS AND VALIDATION', i: 'CH9', d: '' }
    ];

    order.forEach(c => {
      const btn = document.createElement("div");
      btn.className = "chapter-btn";
      btn.onclick = () => openChapter(c.id);
      btn.innerHTML = `
        <div class="chapter-icon">${c.i}</div>
        <div class="chapter-info">
          <h2>${c.t}</h2>
          <p>${c.d}</p>
        </div>
        <div style="color:${PRIMARY_COLOR}; font-weight:bold;">soo arag →</div>
      `;
      listContainer.appendChild(btn);
    });
    main.appendChild(listContainer);

  }  else if (pageKey === "about") {
    // ===== QAYBTA ABOUT OO CUSUB (SQUARE IMAGE & WIDE BOX) =====
    main.innerHTML = `
      <div style="background:white; border-radius:15px; box-shadow:0 10px 30px rgba(0,0,0,0.1); padding:40px; max-width:700px; margin:20px auto; text-align:center; border-top:10px solid ${PRIMARY_COLOR};">
        
        <div style="margin-bottom: 30px;">
          <img src="sh.jpeg" 
                
               style="width:400px; height:400px; border-radius:15px; object-fit:cover; border:6px solid #f0f2f5; box-shadow: 0 5px 15px rgba(0,0,0,0.1);"
               onerror="this.src='https://via.placeholder.com/250/${PRIMARY_COLOR.replace('#','')}/FFFFFF?text=Shaafici'">
        </div>

        <h1 style="color:${PRIMARY_COLOR}; margin-bottom:30px; font-size: 28px; text-transform: uppercase; letter-spacing: 2px;">
          
        </h1>
        
        <div style="text-align:left; line-height:2.5; padding:20px; font-size:18px; background:#f9f9f9; border-radius:12px; border-left:5px solid ${PRIMARY_COLOR};">
          <p style="border-bottom:1px solid #ddd; margin: 0; padding: 10px 0;">
            <strong style="color:${PRIMARY_COLOR}; display:inline-block; width:130px;">Full Name:</strong> 
            <span style="color:#333; font-weight: 600;">Shaafici Axmed Ibraahim</span>
          </p>
          <p style="border-bottom:1px solid #ddd; margin: 0; padding: 10px 0;">
            <strong style="color:${PRIMARY_COLOR}; display:inline-block; width:130px;">Student ID:</strong> 
            <span style="color:#333; font-weight: 600;">C5240069</span>
          </p>
          <p style="border-bottom:1px solid #ddd; margin: 0; padding: 10px 0;">
            <strong style="color:${PRIMARY_COLOR}; display:inline-block; width:130px;">subject:</strong> 
            <span style="color:#333; font-weight: 600;">JavaScript 3 chpter final project</span>
          </p>
          <p style="border-bottom:1px solid #ddd; margin: 0; padding: 10px 0;">
            <strong style="color:${PRIMARY_COLOR}; display:inline-block; width:130px;">teacher:</strong> 
            <span style="color:#333; font-weight: 600;">Ustaad jamiila </span>
          </p>
          <p style="margin: 0; padding: 10px 0;">
            <strong style="color:${PRIMARY_COLOR}; display:inline-block; width:130px;">University:</strong> 
            <span style="color:#333; font-weight: 600;">JUST University</span>
          </p>
        </div>

        <div style="margin-top:30px; padding-top:20px; font-weight:bold; color:${PRIMARY_COLOR}; font-size:20px;">
        
        </div>
      </div>
    `;
  } else if (pageKey === "contact") {
    main.innerHTML = `<div style="background:white; padding:40px; border-radius:15px; text-align:center; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
      <h2 style="color:${PRIMARY_COLOR}">Contact</h2>
      <p>Email: <b>shaafia862@email.com</b></p>
      <p>Phone: <b>+252624765693</b></p>
      <p>Phone: <b>+252683607190</b></p>
    </div>`;
  }
}

function openChapter(id) {
  main.innerHTML = "";
  const data = chaptersData[id];
  const back = document.createElement("button");
  back.textContent = "← soonoqo";
  back.style.cssText = `padding:8px 15px; background:red; color:white; border:none; border-radius:5px; cursor:pointer; margin-bottom:20px; font-weight:bold;` ;
  back.onclick = () => loadPage("home");
  main.appendChild(back);

  data.examples.forEach((ex, i) => {
    const div = document.createElement("div");
    div.className = "example-div";
    div.innerHTML = `<h3 style="color:${PRIMARY_COLOR}">${i+1}. ${ex.title}</h3>`;
    
    if(ex.html) {
      const demo = document.createElement("div");
      demo.style.cssText = "padding:15px; border:2px dashed #ccc; margin-bottom:10px; background:#fafafa; border-radius:8px;";
      demo.innerHTML = ex.html;
      div.appendChild(demo);
      if(ex.init) setTimeout(ex.init, 0);
    }
    
    if(ex.code) {
      const pr = document.createElement("pre");
      pr.textContent = ex.code;
      div.appendChild(pr);
      const b = document.createElement("button");
      b.textContent = "RUN GAREEY";
      b.style.cssText = `background:${PRIMARY_COLOR}; color:white; border:none; padding:7px 15px; border-radius:4px; cursor:pointer; font-weight:bold;`;
      const out = document.createElement("div");
      out.style.marginTop = "10px";
      b.onclick = () => { 
        try { 
          const r = new Function(ex.code)(); 
          out.textContent = "Result: " + (r !== undefined ? r : "Executed"); 
          out.style.color="blue"; 
        } catch(e) { 
          out.textContent = "Error: " + e.message; out.style.color="red"; 
        } 
      };
      div.appendChild(b); div.appendChild(out);
    }
    main.appendChild(div);
  });
}

// ===== FOOTER =====
const footer = document.createElement("footer");
footer.style.cssText = `background:#1a73e8; color:white; text-align:center; padding:20px; margin-top:auto; font-size:14px;`;
footer.innerHTML = `&copy; 2026 Shaafici Axmed Ibraahim `;
document.body.appendChild(footer);

loadPage("home");