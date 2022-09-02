# card styles

Ce repos sert à reunir l'ensemble de style sur les card que j'ai designer ou que je me suis inspirer et pour cela j'ai choisis d'avoir une approche mobile first.

## Card filtrer avec un effet de flou with blur

Un ensemble de card de présentation qui utilise les filtre en `blur`.
exemple d'utilisation :

- presentation groupe de travaille.
- projet portfolio.
- Les derniers articles.

Demarche:
On aura une carte qui va contenir toutes nos cartes on va lui donner une classe `.cards` et dans cet element qui peut etre un element `div`, `section`, `main`,... on va y regrouper toutes nos `card`.
Chacune de nos carte(`card`) va posseder un lien (`<a></a>`) avec la classe`card`, donc nos carte vont etre des liens.
Sur une carte on aura un element `div` qui aura comme classe `card-bg` et c'est lui qui va contenir notre background dans l'attribut style sous forme de `style='background-image:url("Quelques-chose.image")''`.
Juste après cet element div qui va contenir le background de notre image, on aura aussi un element qui va contenir tous les element de notre card et on va lui donner la classe `card-body` ou `card-content`, c'est à l'interireur de cette `card-content` où l'on va inserer nos elements.

```{HTML}
  <!-- Va contenir toutes nos cartes -->
    <div class="cards">
        <!-- Carte  A -->
        <a href="#" class="card">
            <div class="card-bg" style="background-image:url()"></div>
            <div class="card-content">
                <h3>Japon</h3>
                <p>Voyage, architecto officia.</p>
            </div>
        </a>
        <!-- Carte  B -->
        <!-- Carte  C -->
        <!-- Carte  D -->
    </div>
    ```
Lors du style sur les `card` vous aller voir un code un peu particulier sur lequel on va utiliser des padding-bottom en pourcentage.

```{CSS}

.card {
  position: relative;
  padding-bottom: 75%;
}
.card-bg {
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

```

Sur `card` on met un `padding-bottom` car on ne veut pas mettre de height sur notre carte. etant donner que l'on a un enfant direct qui est en `position: absolute`.
  *Le padding en pourcentage permet de signaler au navigateur que l'on a envie de garder une certaine proportion ou ratio par rapport à la largeur ou à la hauteur, ici en mettant un `padding-bottom` en pourcentage c'est pour dire que l'on a envie que la hauteur garder une certaine ratio par rapport à la largeur*.
  Dans notre cas en précisant 150% sur le `padding-bottom`  on précise que le padding soit d'une certaine proportion, un certain pourcent par rapport à la largeur. et cela nous permet d'avoir des element qui auront toujours les memes proportions.
  Cette technique sympas nous evite à ne pas jouer avec les medias queries avec la propriétés `width`, `height` pour faire matcher les images.
