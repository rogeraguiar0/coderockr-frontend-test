import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { coderockrApi } from "../../services/coderockrApi";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export interface iPosts {
  id: number;
  author: {
    name: string;
    mail: string;
  };
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

const HomePage = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<iPosts[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await coderockrApi.get<iPosts[]>(
          `/posts?_limit=3&_page=${page}`
        );
        setPosts([...posts, ...response.data]);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, [page]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting))
        setPage((currentPage) => currentPage + 1);
    });
    const tag = document.querySelector(".obs");
    tag && intersectionObserver.observe(tag);
    return () => intersectionObserver.disconnect();
  }, []);

  const alignedPosts = () => {
    let arr: iPosts[][] = [];
    for (let i = 0; i < posts.length; i += 3) {
      const auxArr = [];
      auxArr[0] = posts[i];
      if (posts[i + 1]) auxArr[1] = posts[i + 1];
      if (posts[i + 2]) auxArr[2] = posts[i + 2];
      arr.push(auxArr);
    }
    return arr;
  };

  return (
    <>
      <Header />
      <main>
        {alignedPosts().map((post, index) => (
          <section key={index}>
            <div>
              {post[0] && (
                <article
                  className={`small-article ${
                    index % 2 === 0 ? "even" : "odd"
                  }`}
                >
                  <img
                    src={post[0].image}
                    alt={`Imagem do post de ${post[0].author.name}`}
                  />
                  <div>
                    <p className="post-author">{post[0].author.name}</p>
                    <h3 className="post-title">{post[0].title}</h3>
                    <p className="post-content">{post[0].content}</p>
                    <button onClick={() => navigate(`/posts/${post[0].id}`)}>
                      <AiOutlineDoubleRight />
                    </button>
                  </div>
                </article>
              )}
              {post[1] && (
                <article
                  className={`small-article ${
                    index % 2 === 0 ? "even" : "odd"
                  }`}
                >
                  <img
                    src={post[1].image}
                    alt={`Imagem do post de ${post[1].author.name}`}
                  />
                  <div>
                    <p className="post-author">{post[1].author.name}</p>
                    <h3 className="post-title">{post[1].title}</h3>
                    <p className="post-content">{post[1].content}</p>
                    <button onClick={() => navigate(`/posts/${post[1].id}`)}>
                      <AiOutlineDoubleRight />
                    </button>
                  </div>
                </article>
              )}
            </div>
            {post[2] && (
              <article
                className={`big-article ${index % 2 === 0 ? "even" : "odd"}`}
              >
                <img
                  src={post[2].image}
                  alt={`Imagem do post de ${post[2].author.name}`}
                />
                <div>
                  <p className="post-author">{post[2].author.name}</p>
                  <h3 className="post-title">{post[2].title}</h3>
                  <p className="post-content">{post[2].content}</p>
                  <button onClick={() => navigate(`/posts/${post[2].id}`)}>
                    <AiOutlineDoubleRight />
                  </button>
                </div>
              </article>
            )}
          </section>
        ))}
        <div className="obs" />
      </main>
    </>
  );
};

export default HomePage;
