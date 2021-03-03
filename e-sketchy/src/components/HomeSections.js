import React from "react";
import "../style/Home.css";

function HomeSections() {
  return (
    <div className="container">
      <section className="welcome">
        <h1>Welcome</h1>
        <p>
          Drawing is a way of making a picture. Drawings are created by making
          lines on a surface. Long lines make up the shapes and small lines make
          the textures. Drawings can be images of real life or abstract images
          showing ideas cannot be seen in the real world.
        </p>
      </section>
      <label> Inspirational Drawing Quotes</label>
      <section className="quots">
        <q>
          Drawing includes three and a half quarters of the content of
          painting…Drawing contains everything, except the hue.
          <br />
          <span className="author">Jean-Auguste-Dominique Ingres</span>
        </q>{" "}
        <br />
        <q>
          I draw like other people bite their nails.”
          <br /> <span className="author"> Pablo Picasso</span>
        </q>
        <br />
        <q>
          Drawing is rather like playing chess: your mind races ahead of the
          moves that you eventually make.
          <br /> <span className="author"> David Hockney</span>
        </q>
        <br />
      </section>
      <section className="sources">
        <h1>Wanna Give It A Try?</h1>
        <p>
          Read Books, Watch Videos, Read Articles & of course PRACTICE! until
          you crush it ...{" "}
        </p>
        <div className="list">
          <article>
            <h3> Top 10 Books </h3>
            <img
              className="poster"
              src="https://i.pinimg.com/originals/4c/b9/04/4cb9047b21a64422be4d421995197800.jpg"
            />
            <a href="https://conceptartempire.com/best-drawing-books-for-beginners/">
              Read More
            </a>
          </article>
          <article>
            <h3> Top 10 YouTube Channels </h3>
            <img
              className="poster"
              src="https://cdn.tutsplus.com/psd/uploads/legacy/196_Doodle_Composite/27.jpg"
            />
            <a href="https://www.creativebloq.com/features/the-10-best-youtube-art-channels">
              Read More
            </a>
          </article>
          <article>
            <h3> Top 10 Tips </h3>
            <img
              className="poster"
              src="https://i.pinimg.com/originals/44/d0/77/44d077e000d04555cee9a60dd33cdfad.jpg"
            />
            <a href="https://www.peachpit.com/articles/article.aspx?p=2153470">
              Read More
            </a>
          </article>
        </div>
      </section>
      <section className="store">
        <h1> Visit Our Store!</h1>
        <p>
          {" "}
          Any artist will fall in love with the products we have in our store.
          Don't believe me?
        </p>
        <a href="/store"> Take A Peek!</a>
      </section>
    </div>
  );
}
export default HomeSections;
