import React from "react";
import Slideshow from "../components/slideshow";
import HomeSections from "../components/HomeSections";

function Home() {
  return (
    <div className="gal">
      <Slideshow
        interval={3000}
        images={[
          "https://i.ytimg.com/vi/VZq_71dQLUA/maxresdefault.jpg",
          "https://pm1.narvii.com/6473/1975f24321ab57a6502a3eca6492bd4ee4016fcc_hq.jpg",
          "http://www.worldclass.sg/wp-content/uploads/1115_art_supplies_1200.jpg",
          "https://www.outsetmedia.com/sites/default/files/rgb-89009-vintage-art-supplies.jpg",
          "https://previews.123rf.com/images/supernam/supernam1604/supernam160400439/55716170-paper-watercolors-paint-brush-and-some-art-stuff-on-wooden-table-top-view-.jpg",
          "https://mymodernmet.com/wp/wp-content/uploads/2018/10/glitter-watercolors-1.jpg",
        ]}
      />
      <HomeSections />
    </div>
  );
}

export default Home;
