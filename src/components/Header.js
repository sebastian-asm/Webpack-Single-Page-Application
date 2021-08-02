export default function Header() {
  const view = `
    <div class="header-main">
      <div class="header-logo">
        <h1><a href="/">Rick and Morty</a></h1>
      </div>

      <div class="header-nav">
        <a href="#/about">About</a>
      </div>
    </div> 
  `;

  return view;
}
