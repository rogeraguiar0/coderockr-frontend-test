import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { coderockrApi } from "../../services/coderockrApi";
import { iPosts } from "../HomePage";

const PostPage = () => {
  const { id } = useParams();
  const [actualPost, setActualPost] = useState<iPosts>();

  useEffect(() => {
    const user = async () => {
      const response = await coderockrApi.get(`/posts?id=${id}`);
      setActualPost(response.data[0]);
    };
    user();
  }, [id]);

  const formatData = () => {
    const date = actualPost?.createdAt;
    const formatDate = date?.slice(0, 10);
    const arr = formatDate?.split("-");

    let month;

    if (arr) {
      switch (arr[1]) {
        case "00":
          month = "Jan";
          break;
        case "01":
          month = "Fev";
          break;
        case "02":
          month = "Mar";
          break;
        case "03":
          month = "Abr";
          break;
        case "04":
          month = "Mai";
          break;
        case "05":
          month = "Jun";
          break;
        case "06":
          month = "Jul";
          break;
        case "07":
          month = "Ago";
          break;
        case "08":
          month = "Set";
          break;
        case "09":
          month = "Out";
          break;
        case "10":
          month = "Nov";
          break;
        case "11":
          month = "Dez";
          break;
        default:
          month = "";
      }

      const day = arr[2];
      const year = arr[0];

      return `${month} ${day}, ${year}`;
    }
  };

  return (
    <>
      <Header />
      <main className="post-main">
        <section className="single-post">
          {actualPost ? (
            <>
              <div className="post-header">
                <img
                  src={actualPost?.image}
                  alt={`Imagem do post de ${actualPost?.author.name}`}
                />
                <div className="post-info">
                  <p>{formatData()}</p>
                  <p>{actualPost?.author.name}</p>
                  <h3>{actualPost?.title}</h3>
                </div>
              </div>
              <p className="post-text">{actualPost?.content}</p>
            </>
          ) : (
            <p className="post-loading">Loading...</p>
          )}
        </section>
      </main>
    </>
  );
};

export default PostPage;
