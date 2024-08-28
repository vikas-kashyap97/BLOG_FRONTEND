import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { Context } from "../../main";

const UpdateBlog = () => {
  const { id } = useParams();
  const [category, setCategory] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [intro, setIntro] = useState("");
  const [paraOneTitle, setParaOneTitle] = useState("");
  const [paraOneImage, setParaOneImage] = useState("");
  const [paraOneDescription, setParaOneDescription] = useState("");
  const [paraTwoTitle, setParaTwoTitle] = useState("");
  const [paraTwoImage, setParaTwoImage] = useState("");
  const [paraTwoDescription, setParaTwoDescription] = useState("");
  const [paraThreeTitle, setParaThreeTitle] = useState("");
  const [paraThreeImage, setParaThreeImage] = useState("");
  const [paraThreeDescription, setParaThreeDescription] = useState("");
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [paraOneImagePreview, setParaOneImagePreview] = useState("");
  const [paraTwoImagePreview, setParaTwoImagePreview] = useState("");
  const [paraThreeImagePreview, setParaThreeImagePreview] = useState("");
  const [title, setTitle] = useState("");
  const [published, setPublished] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `https://blog-backend-deployment.onrender.com/api/v1/blog/singleblog/${id}`,
          { withCredentials: true }
        );
        setTitle(data.blog.title);
        setIntro(data.blog.intro);
        setCategory(data.blog.category);
        setPublished(data.blog.published);
        setMainImage(data.blog.mainImage.url);
        setParaOneTitle(data.blog.paraOneTitle);
        setParaOneDescription(data.blog.paraOneDescription);
        data.blog.paraOneImage && setParaOneImage(data.blog.paraOneImage.url);
        setParaTwoTitle(data.blog.paraTwoTitle);
        setParaTwoDescription(data.blog.paraTwoDescription);
        data.blog.paraTwoImage && setParaTwoImage(data.blog.paraTwoImage.url);
        setParaThreeTitle(data.blog.paraThreeTitle);
        setParaThreeDescription(data.blog.paraThreeDescription);
        data.blog.paraThreeImage &&
          setParaThreeImage(data.blog.paraThreeImage.url);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedBlog = new FormData();
    updatedBlog.append("title", title);
    updatedBlog.append("intro", intro);
    updatedBlog.append("category", category);
    console.log(published);
    updatedBlog.append("published", published);
    updatedBlog.append("mainImage", mainImage);
    if (paraOneTitle && paraOneTitle.length !== 0) {
      updatedBlog.append("paraOneTitle", paraOneTitle);
    } else {
      updatedBlog.append("paraOneTitle", "");
    }
    if (paraOneDescription && paraOneDescription.length !== 0) {
      updatedBlog.append("paraOneDescription", paraOneDescription);
    } else {
      updatedBlog.append("paraOneDescription", "");
    }
    if (paraOneImage) {
      updatedBlog.append("paraOneImage", paraOneImage);
    }
    if (paraTwoTitle && paraTwoTitle.length !== 0) {
      updatedBlog.append("paraTwoTitle", paraTwoTitle);
    } else {
      updatedBlog.append("paraTwoTitle", "");
    }
    if (paraTwoDescription && paraTwoDescription.length !== 0) {
      updatedBlog.append("paraTwoDescription", paraTwoDescription);
    } else {
      updatedBlog.append("paraTwoDescription", "");
    }
    if (paraTwoImage) {
      updatedBlog.append("paraTwoImage", paraTwoImage);
    }
    if (paraThreeTitle && paraThreeTitle.length !== 0) {
      updatedBlog.append("paraThreeTitle", paraThreeTitle);
    } else {
      updatedBlog.append("paraThreeTitle", "");
    }
    if (paraThreeDescription && paraThreeDescription.length !== 0) {
      updatedBlog.append("paraThreeDescription", paraThreeDescription);
    } else {
      updatedBlog.append("paraThreeDescription", "");
    }
    if (paraThreeImage) {
      updatedBlog.append("paraThreeImage", paraThreeImage);
    }

    try {
      const { data } = await axios.put(
        `https://blog-backend-deployment.onrender.com/api/v1/blog/update/${id}`,
        updatedBlog,
        { withCredentials: true }
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const mainImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setMainImagePreview(reader.result);
      setMainImage(file);
    };
  };
  const paraOneImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setParaOneImagePreview(reader.result);
      setParaOneImage(file);
    };
  };
  const paraTwoImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setParaTwoImagePreview(reader.result);
      setParaTwoImage(file);
    };
  };
  const paraThreeImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setParaThreeImagePreview(reader.result);
      setParaThreeImage(file);
    };
  };

  const { mode } = useContext(Context);

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <section className="update-blog">
        <h3>UPDATE BLOG</h3>
        <form>
          <div className="category-box">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Blog Category</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Technology">Technology</option>
              <option value="Sports">Sports</option>
              <option value="Travel">Travel</option>
              <option value="Business">Business</option>
              <option value="Economy">Economy</option>
              <option value="Health & Wellness">Health & Wellness</option>
              <option value="Food & Recipes">Food & Recipes</option>
              <option value="Personal Finance">Personal Finance</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Politics">Politics</option>
              <option value="Science">Science</option>
              <option value="Environment">Environment</option>
              <option value="Arts & Culture">Arts & Culture</option>
              <option value="Fashion & Beauty">Fashion & Beauty</option>
              <option value="Home & Garden">Home & Garden</option>
              <option value="Parenting">Parenting</option>
              <option value="Self Improvement">Self Improvement</option>
              <option value="History">History</option>
              <option value="Gaming">Gaming</option>
              <option value="Books & Literature">Books & Literature</option>
              <option value="Music">Music</option>
              <option value="Relationships">Relationships</option>
              <option value="Technology Reviews">Technology Reviews</option>
              <option value="Travel Tips">Travel Tips</option>
              <option value="DIY Projects">DIY Projects</option>
              <option value="Cryptocurrency">Cryptocurrency</option>
              <option value="Social Media">Social Media</option>
              <option value="Virtual Reality">Virtual Reality</option>
              <option value="Personal Development">Personal Development</option>
              <option value="Startups">Startups</option>
              <option value="Productivity">Productivity</option>
              <option value="Philanthropy">Philanthropy</option>
              <option value="Legal Advice">Legal Advice</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Career Development">Career Development</option>
              <option value="Motivation">Motivation</option>
              <option value="Events & Festivals">Events & Festivals</option>
              <option value="Travel Guides">Travel Guides</option>
              <option value="Humor">Humor</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="BLOG MAIN TITLE"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <label>BLOG MAIN IMAGE</label>
            <img
              src={
                mainImagePreview
                  ? `${mainImagePreview}` // If paraOneImage exists, use it directly
                  : mainImage // Otherwise, use paraOneImagePreview
                  ? `${mainImage}`
                  : "/imgPL.webp" // If neither paraOneImage nor paraOneImagePreview exists, use an empty string
              }
              alt="subParaOneImg"
            />
            <input
              type="file"
              onChange={mainImagePreviewHandler}
              style={{ border: "none" }}
            />
          </div>
          <textarea
            rows="25"
            className="intro"
            placeholder="BLOG INTRO..... (Must contain at least 250 characters!)"
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />
          <div className="sub-para">
            <input
              type="text"
              placeholder="Paragraph one title"
              value={
                paraOneTitle && paraOneTitle.length > 0 ? paraOneTitle : ""
              }
              onChange={(e) => setParaOneTitle(e.target.value)}
            />
            <img
              src={
                paraOneImagePreview
                  ? `${paraOneImagePreview}` // If paraOneImage exists, use it directly
                  : paraOneImage // Otherwise, use paraOneImagePreview
                  ? `${paraOneImage}`
                  : "/imgPL.webp" // If neither paraOneImage nor paraOneImagePreview exists, use an empty string
              }
              alt="subParaOneImg"
            />
            <input
              type="file"
              onChange={paraOneImagePreviewHandler}
              style={{ border: "none" }}
            />
            <textarea
              rows="10"
              placeholder="Blog First Sub Paragraph Comes Here..."
              value={
                paraOneDescription && paraOneDescription.length > 0
                  ? paraOneDescription
                  : ""
              }
              onChange={(e) => setParaOneDescription(e.target.value)}
            />
          </div>
          <div className="sub-para">
            <input
              type="text"
              placeholder="Paragraph two title"
              value={
                paraTwoTitle && paraTwoTitle.length > 0 ? paraTwoTitle : ""
              }
              onChange={(e) => setParaTwoTitle(e.target.value)}
            />
            <img
              src={
                paraTwoImagePreview
                  ? `${paraTwoImagePreview}` 
                  : paraTwoImage 
                  ? `${paraTwoImage}`
                  : "/imgPL.webp" 
              }
              alt="subParaOneImg"
            />
            <input
              type="file"
              onChange={paraTwoImagePreviewHandler}
              style={{ border: "none" }}
            />
            <textarea
              rows="10"
              placeholder="Blog Second Sub Paragraph Comes Here..."
              value={
                paraTwoDescription && paraTwoDescription.length > 0
                  ? paraTwoDescription
                  : ""
              }
              onChange={(e) => setParaTwoDescription(e.target.value)}
            />
          </div>
          <div className="sub-para">
            <input
              type="text"
              placeholder="Paragraph three title"
              value={
                paraThreeTitle && paraThreeTitle.length > 0
                  ? paraThreeTitle
                  : ""
              }
              onChange={(e) => setParaThreeTitle(e.target.value)}
            />
            <img
              src={
                paraThreeImagePreview
                  ? `${paraThreeImagePreview}` 
                  : paraThreeImage 
                  ? `${paraThreeImage}`
                  : "/imgPL.webp" 
              }
              alt="subParaOneImg"
            />
            <input
              type="file"
              onChange={paraThreeImagePreviewHandler}
              style={{ border: "none" }}
            />
            <textarea
              rows="10"
              placeholder="Blog Third Sub Paragraph Comes Here..."
              value={
                paraThreeDescription && paraThreeDescription.length > 0
                  ? paraThreeDescription
                  : ""
              }
              onChange={(e) => setParaThreeDescription(e.target.value)}
            />
          </div>
          <div className="publish-box">
            <label>Published?</label>
            <select
              value={published === null ? "" : published}
              onChange={(e) => setPublished(e.target.value === "true")}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <button className="update-btn" onClick={handleUpdate}>
            UPDATE
          </button>
        </form>
      </section>
    </article>
  );
};

export default UpdateBlog;
