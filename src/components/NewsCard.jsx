import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import moment from "moment";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        image_url,
        details,
        total_view,
        rating,
        tags,
        id,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden">
            {/* Author Section */}
            <div className="flex justify-between items-center p-4 bg-base-200">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">{author?.name}</h2>
                        <p className="text-xs text-gray-500">
                            {moment(author?.published_date).format("YYYY-MM-DD")}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                    <FaRegBookmark className="cursor-pointer hover:text-primary" />
                    <FaShareAlt className="cursor-pointer hover:text-primary" />
                </div>
            </div>

            {/* News Title */}
            <div className="px-4 pt-4">
                <h2 className="text-lg font-bold leading-snug">{title}</h2>
            </div>

            {/* News Image */}
            <figure className="px-4 pt-3">
                <img
                    src={image_url}
                    alt={title}
                    className="rounded-lg w-full object-cover"
                />
            </figure>

            {/* News Details */}
            <div className="px-4 pt-4 text-sm text-gray-600">
                {details.length > 200 ? (
                    <p>
                        {details.slice(0, 200)}...{" "}
                        <Link className="text-primary font-semibold cursor-pointer" to={`/news-details/${id}`}>
                            Read More
                        </Link>
                    </p>
                ) : (
                    <p>{details}</p>
                )}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center p-4 border-t mt-3">
                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex text-warning">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < rating.number ? "text-warning" : "text-gray-300"} />
                        ))}
                    </div>
                    <span className="text-sm font-medium">{rating.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span className="text-sm font-medium">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
