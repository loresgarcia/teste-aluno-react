import { Routes, Route, useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "../PostModelo";
import ReactMarkdown from "react-markdown";
import "./post.css";
import NaoEncontrado from "../../pages/NaoEncontrado";
import PaginaPadrao from "../PaginaPadrao";
import styles from './Post.module.css'
import PostCard from "../PostCard";
export default function Post() {
  const { id } = useParams();

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <NaoEncontrado />;
  }

  const postRecomendados = posts.filter((post)=> post.id !== Number(id)).sort((a,b)=> b.id - a.id).slice(0,4)
  console.log(postRecomendados)

  return (
    // <Routes>
    //   <Route path="*" element={<PaginaPadrao />}>
    //     <Route
    //       index
    //       element={
    //         <PostModelo
    //           fotoCapa={`../../../public/assets/posts/${post.id}/capa.png`}
    //           titulo={post.titulo}
    //         >
    //           <div className="post-markdown-container">
    //             <ReactMarkdown>{post.texto}</ReactMarkdown>
    //           </div>
    //         </PostModelo>
    //       }
    //     />
    //   </Route>
    // </Routes>
    <PaginaPadrao>
      <PostModelo
        fotoCapa={`../../../public/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>

        <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
        <ul className={styles.postsRecomendados}>
          {postRecomendados.map((post, index) =>(
            <li key={index}><PostCard post={post}/></li>
          ))}
        </ul>
      </PostModelo>
    </PaginaPadrao>
  );
}
