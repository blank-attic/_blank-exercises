# CSS > Le positionnement (2) > Exercice 1

Créer un site avec une bannière, un menu, 2 barres latérales (un sommaire, une publicité), un footer.
Le contenu principal de la page doit contenir 4 articles avec chacun une image.

`(header>h1{HEADER})+(nav>ul>li{Item $}*5)+(div.wrapper>(main>(article#article$>(h2{Titre $}+p>(img+{lorem100})))*4)+(aside.summary>(ul>(li>a[href="#article$"]{Article $})*4))+(aside.ads>h2{Publicité}))+footer>h3{FOOTER}`
