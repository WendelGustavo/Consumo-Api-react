import React from 'react';

const Navbar = () => (
  <nav class="navbar navbar-expand-lg bg-dark mb-5">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Postagens</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Autores</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          </a>
          <ul class="dropdown-menu bg-dark">
            <li><a class="dropdown-item text-white" href="#">Cara Fala coisas legais</a></li>
            <li><a class="dropdown-item text-white" href="#">Cara legal</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
);

export default Navbar;