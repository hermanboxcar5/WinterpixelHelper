document.getElementsByClassName('header')[0].innerHTML=
  `
  <b>
    <span style='flex:999' class='logo'><a class='deflink' href='/' style='color:black; font-size:24px;'><img src='/logo.png' style='width:24px;height:24px;'>&nbsp;&nbsp;WpH</a></span>
    <span class = 'headerlink' style='flex:1; text-align:right;padding-left:50vw'>
      <a class='deflink' href='/acrv2'>RBR - ACRv2</a>
      <span class='spacer4'>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <a class='deflink' href='https://discord.gg/ynyZ9GPCTY'>Discord</a>
      <span class='spacer4'>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <a class='deflink' href='/namechanger'>RBR Name Changer</a>
    </span>
  </b>
  `
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = '/logo.png';