import React from "react";
import AppNavbar from "./appNavbar";
import Header from "./header";
import Chapter from "./chapter";
import Footer from "./footer";
import { data as headerData } from "../config/headerCardData.json";
import { chapters } from "../config/data.json";
import { courses } from "../config/coursesData.json";

function Home(props) {
  return (
    <>
      <AppNavbar user={false} />
      <Header headerData={headerData} />
      <main className="container-fluid mt-3 p-0">
        {chapters.map((chapter) => (
          <Chapter
            key={chapter.chapterNo}
            data={chapter.data}
            chapterNo={chapter.chapterNo}
          />
        ))}
      </main>
      <Footer courses={courses} />
    </>
  );
}

export default Home;
