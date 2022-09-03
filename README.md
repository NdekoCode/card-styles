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
  Pour faire du beau sur nos images on va utiliser la proprieter CSS `filter` avec `brightness(0.75)` qui va permettre de jouer sur la *luminosité* et `saturate(1.2)` qui permet de jouer sur la *saturation* des images et enfin on va baiser un petit peu le contraste des nos images avec `contrast(0.85)` donc on va baiser de 15% le contraste de l'image donc on a:

  ```{CSS}
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  ```

  Pour faire en sorte que le contenus dans `card-content` soit se place devant l'image on doit passer `card-content` aussi en position `absolute`.
L'Effet rechercher est que l'on veut est que au survol on veut que la carte sur laquel on survol s'agrandissent et que toutes les autres cartes s'assombrissent et se cachent derrière une ombre.
Pour faire cet effet on va d'abord detecter le survol de la carte et ainsi augmenter le `transform:scale(1.05)` de `card-bg`
Pour faire en sorte que toutes les autres cartes s'assombrissent et se cachent derrière une ombre si elle ne sont pas survoler, pour faire cela on doit d'abord détecter quand on survole le parent des `card` ensuite, si une carte n'est pas survoler dans ce cas on va modifier `card-bg` par contre si la quand on survole le parent des `card` et que la card lui aussi est survoler, dans ce cas on va rien faire.
La règle CSS à utiliser est:
 On baisse la luminosité de toute nos cartes, on retire toutes les couleurs (càd pas de staturation), on augmente le contrast pour accentuer la difference entre le blanc et le noir et on va encore ajouter du flou.

```{CSS}
.cards:hover > .card:not(:hover) > .card-bg {

    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20);
}
```
