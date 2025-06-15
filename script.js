function getparam(a, e) {
  return e || (e = window.location.href), new URL(e).searchParams.get(a)
}
const s = (a) => document.getElementById(a)

function getIdFromUrl(url) {
  return url.match(/[-\w]{25,}/)
}
const apikey = "AIzaSyD739-eb6NzS_KbVJq1K8ZAxnrMfkIqPyw"

const get = () => {
  getbase()
}
const getbase = () => {
  const ply = []
  /*
    ply.videourl = `https://www.googleapis.com/drive/v3/files/${getIdFromUrl(s('videourl').value) }?alt=media&key=${apikey}`;

  
  
  let poster = "";
      if(s('posterurl').value){
       poster = s('posterurl').value ;}
  else {
    poster = 'https://lh3.googleusercontent.com/d/'+getIdFromUrl(s('videourl').value);
  }
    ply.posterurl = poster ; */

  ply.id = getIdFromUrl(s("videourl").value)

  // ply.videotitle = s('videotitle').value;
  console.log(ply)

  var arr = JSON.stringify(Object.assign({}, ply))
  console.log(btoa(arr))
  window.base = btoa(arr)
  iframe()
  return btoa(arr)
}

//Player Openers (diff. func. coding intentionally)
const openartplayer = () => {
  window.open("https://rabbi0197273.github.io/Rabbi123/artplayer.html?id=" + base)
}
const openplyr = () => {
  window.open("https://rabbi0197273.github.io/Rabbi123/plyr.html?id=" + base)
}
const openfluid = () => {
  window.open("https://rabbi0197273.github.io/Rabbi123/fluid.html?id=" + base)
}
const openafterglow = () => {
  window.open("https://rabbi0197273.github.io/Rabbi123/afterglow.html?id=" + base)
}
const openmediaelements = () => {
  window.open("https://rabbi0197273.github.io/Rabbi123/mediaelements.html?id=" + base)
}
const openvlitejs = () => {
  window.open("https://rabbi0197273.github.io/Rabbi123/vlitejs.html?id=" + base)
}

const pmsg = "Copy Embed Code"
//Player Embedders
const embedartplayer = () => {
  prompt(
    pmsg,
    `<iframe width="560" height="315" 
scrolling="no"
src="https://rabbi0197273.github.io/Rabbi123/artplayer.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`,
  )
}
const embedplyr = () => {
  prompt(
    pmsg,
    `<iframe width="560" height="315" 
scrolling="no"
src="https://rabbi0197273.github.io/Rabbi123/plyr.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`,
  )
}
const embedfluid = () => {
  prompt(
    pmsg,
    `<iframe width="560" height="315" 
scrolling="no"
src="https://rabbi0197273.github.io/Rabbi123/fluid.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`,
  )
}
const embedafterglow = () => {
  prompt(
    pmsg,
    `<iframe width="560" height="315" 
scrolling="no"
src="https://rabbi0197273.github.io/Rabbi123/afterglow.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`,
  )
}
const embedmediaelements = () => {
  prompt(
    pmsg,
    `<iframe width="560" height="315" 
scrolling="no"
src="https://rabbi0197273.github.io/Rabbi123/mediaelements.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`,
  )
}
const embedvlitejs = () => {
  prompt(
    pmsg,
    `<iframe width="560" height="315" 
scrolling="no"
src="https://rabbi0197273.github.io/Rabbi123/vlitejs.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`,
  )
}

const iframe = () => {
  s("afterglow").src = "https://rabbi0197273.github.io/Rabbi123/afterglow.html?id=" + base
  s("fluid").src = "https://rabbi0197273.github.io/Rabbi123/fluid.html?id=" + base
  s("plyr").src = "https://rabbi0197273.github.io/Rabbi123/plyr.html?id=" + base

  s("vlitejs").src = "https://rabbi0197273.github.io/Rabbi123/vlitejs.html?id=" + base
  s("mediaelements").src = "https://rabbi0197273.github.io/Rabbi123/mediaelements.html?id=" + base

  s("artplayer").src = "https://rabbi0197273.github.io/Rabbi123/artplayer.html?id=" + base
}
