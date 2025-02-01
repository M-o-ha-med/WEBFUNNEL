import { useState } from "react";

export default function ArticlePage() {
  const [comments, setComments] = useState<string[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");

  const handleCommentSubmit = (): void => {
    const trimmedComment = commentInput.trim();
    if (trimmedComment !== "") {
      setComments((prevComments) => [...prevComments, trimmedComment]); // ✅ Functional update
      setCommentInput(""); // ✅ Clear input after submitting
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Article Header */}
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-6">
        <img
          src="/article_cover.jpg"
          alt="Article Cover"
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">Judul Artikel yang Menarik</h1>
        <p className="text-gray-500 mb-6">
          Ditulis oleh <span className="font-medium text-gray-800">Nama Penulis</span> pada 1 Februari 2025
        </p>
        <p className="text-lg text-gray-700 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, nisi a venenatis sodales, nulla erat aliquet lectus, et aliquam elit turpis et risus. Suspendisse potenti. Integer vitae massa nec libero scelerisque suscipit. Donec vitae nulla justo. Nullam tincidunt risus ut risus ultrices, sed tincidunt nisi vulputate. Cras non sapien non purus tincidunt convallis nec ut enim.
        </p>
      </div>

      {/* Comments Section */}
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md mt-8 p-6">
        <h2 className="text-2xl font-bold mb-4">Komentar</h2>

        {/* Comment Form */}
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Tulis komentar Anda..."
            className="flex-grow border border-gray-300 rounded-md p-2 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Kirim
          </button>
        </div>

        {/* Comments List */}
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li key={index} className="border border-gray-200 rounded-md p-4 bg-gray-50">
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Belum ada komentar. Jadilah yang pertama!</p>
        )}
      </div>
    </div>
  );
}
