"use client";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Logo, Preloader } from "../../../../public/page";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaRegComments } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { CustomInput } from "../../components/contact/FormInput";
import axios from "axios";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { PageLayout } from "@/app/layout/pageLayout";
import { APP_ID, REST_KEY, baseUrl } from "@/app/parse";
import { CustomBtn } from "@/app/utils/customBtn";

export default function Page({ params }) {
	const [blog, setBlog] = useState({});
	const [postComments, setPostComments] = useState([]);
	const [fetching, setFetching] = useState(true);
	const [postView, setPostView] = useState(null);
	const [postLiked, setPostLiked] = useState(false);
	const [totalLikedPost, setTotalLikedPost] = useState(null);

	const likePostFunction = async () => {
		if (blog) {
			// Retrieve existing liked posts from localStorage
			let likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || {};

			// Toggle like status for the current postId
			likedPosts[blog?.objectId] = !likedPosts[blog?.objectId];

			// Update localStorage with the new liked status
			localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
			setPostLiked(true);
			setTotalLikedPost(blog?.liked + 1);

			try {
				const response = await axios.put(
					`${baseUrl}/classes/ReBlog/${blog?.objectId}`,
					{ liked: blog?.liked + 1 },
					{
						headers: {
							"X-Parse-Application-Id": APP_ID,
							"X-Parse-REST-API-Key": REST_KEY,
							"Content-Type": "application/json",
						},
					}
				);
				// console.log("Viewed field updated successfully:", response.data);
			} catch (error) {
				// console.error("Error updating viewed field:", error);
				return null;
			}
		}
	};

	useEffect(() => {
		const fetchBlogPosts = async () => {
			try {
				const response = await axios.get(`${baseUrl}/classes/ReBlog`, {
					headers: {
						"X-Parse-Application-Id": APP_ID,
						"X-Parse-REST-API-Key": REST_KEY,
					},
				});
				const blogContents = response.data.results;
				console.log(blogContents);

				const title = params.title.replace(/-/g, " ").replace(/%3A/g, ":");
				const filteredBlogContent = blogContents.find(
					(content) => content.title === title
				);
				if (filteredBlogContent) {
					setBlog(filteredBlogContent);

					setTotalLikedPost(filteredBlogContent.liked);

					const postId = filteredBlogContent.objectId;

					if (filteredBlogContent.viewed >= 1000000) {
						// Format the viewed value to display in million format
						const viewedValue =
							(filteredBlogContent.viewed / 1000000).toFixed(1) + "M";
						setPostView(viewedValue);

						console.log(viewedValue);
					} else {
						setPostView(filteredBlogContent.viewed);
					}

					try {
						const response = await axios.get(`${baseUrl}/classes/Comment`, {
							headers: {
								"X-Parse-Application-Id": APP_ID,
								"X-Parse-REST-API-Key": REST_KEY,
							},
							params: {
								where: JSON.stringify({
									commentId: {
										__type: "Pointer",
										className: "ReBlog",
										objectId: postId,
									},
								}),
							},
						});
						const commentData = response.data.results;
						console.log(commentData);
						setPostComments(commentData);
					} catch (error) {
						console.log(error);
					}

					try {
						const response = await axios.put(
							`${baseUrl}/classes/ReBlog/${postId}`,
							{ viewed: filteredBlogContent.viewed + 1 },
							{
								headers: {
									"X-Parse-Application-Id": APP_ID,
									"X-Parse-REST-API-Key": REST_KEY,
									"Content-Type": "application/json",
								},
							}
						);
						// console.log("Viewed field updated successfully:", response.data);
					} catch (error) {
						// console.error("Error updating viewed field:", error);
						return null;
					}
				}

				setFetching(false);
			} catch (error) {
				console.log(error);
				setFetching(false);
			}
		};
		fetchBlogPosts();
	}, [params.title]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const getLikeIcon = () => {
			if (blog) {
				// Retrieve liked posts from localStorage
				const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || {};

				// Check if the postId exists in the likedPosts object and if it's liked
				if (likedPosts[blog?.objectId] === true) {
					// return <BiSolidLike className="text-xl" />;
					setPostLiked(true);
				} else {
					// return <BiLike className="text-xl" />;
					setPostLiked(false);
				}
			}
		};

		getLikeIcon();
	}, [blog, blog?.objectId]);

	if (fetching || !blog?.title) {
		return (
			<div
				className="bg-primary-500"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
				}}>
				<span className="loader"></span>
				{/* <Image src={Preloader} alt="" quality={100} /> */}
			</div>
		);
	}
	// console.log(blog);
	const date = new Date(blog?.createdAt);
	const options = { year: "numeric", month: "short", day: "2-digit" };
	const formattedDate = date.toLocaleDateString("en-US", options);

	return (
		<div className="custom-texts">
			<div
				style={{
					backgroundImage: `url(${blog?.image?.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center center",
					backgroundRepeat: "no-repeat",
					position: "relative",
				}}>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						backgroundColor: "rgba(25, 40, 83, 0.9)",
						zIndex: "1",
					}}></div>
				<div className="relative z-[2] h-[20vh] lg:min-h-[40vh] w-full flex flex-col gap-3 lg:gap-10 items-center justify-center">
					<div className="w-full lg:w-[80%]">
						<h1 className="text-white text-center text-3xl lg:text-5xl font-bold">
							{blog?.title}
						</h1>
					</div>

					<nav className="flex" aria-label="Breadcrumb">
						<ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
							<li className="inline-flex items-center">
								<Link
									href="/"
									className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white ">
									<svg
										className="w-3 h-3 me-2.5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
									</svg>
									Home
								</Link>
							</li>
							<li>
								<div className="flex items-center">
									<svg
										className="rtl:rotate-180 w-3 h-3 text-gray-400  mx-1"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 6 10">
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 9 4-4-4-4"
										/>
									</svg>
									<Link
										href="/blog"
										className="ms-1 text-sm font-medium text-gray-400 hover:text-white  md:ms-2 ">
										Blog
									</Link>
								</div>
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<BlogLayout>
				<div className="blog-post col-span-2">
					<h2 className="text-center">{blog?.title}</h2>
					<div className="flex items-center justify-center gap-4 lg:gap-10 border-b border-gray-500 border-opacity-10">
						<div className="flex items-center gap-2 py-5 ">
							<div className="w-8 h-8 rounded-full bg-primary-900">
								<Image
									src={Logo}
									alt="Digital Asset Rescue"
									className="w-full h-full rounded-full object-cover"
									width={200}
									height={200}
								/>
							</div>

							<p className="text-primary-900 text-sm font-medium">
								<span className="text-gray-400 font-normal">By </span>
								{/* {blog?.name} */}Digital Asset Rescue
							</p>
						</div>

						<div className="flex items-center gap-2 py-5 ">
							<FaCalendarAlt className="text-primary-900" />
							<p className="text-primary-900 text-sm font-medium">
								{formattedDate}
							</p>
						</div>
						<div className="flex items-center gap-2 py-5 ">
							<BiSolidLike className="text-primary-900" />
							<p className="text-primary-900 text-sm font-medium">
								{/* {blog?.liked} */}
								{totalLikedPost}
							</p>
						</div>
						<div className="flex items-center gap-2 py-5 ">
							<BsEyeFill className="text-primary-900" />
							<p className="text-primary-900 text-sm font-medium">
								{/* {blog?.viewed} */}
								{postView}
							</p>
						</div>
					</div>

					{/* Featured Image  */}

					<div className="h-[520.67px] w-full py-10">
						{/* <Image
							src={blog?.image}
							alt={title}
							className="w-full h-full object-cover"
							quality={100}
						/> */}
						<img
							src={blog?.image.url}
							alt={blog?.title}
							className="w-full h-full object-cover"
							loading="eager"
						/>
					</div>

					{/* Featured Image  */}

					{/* Content  */}
					<div className="blog-content pb-20 space-y-4">
						<div
							dangerouslySetInnerHTML={{
								__html: blog?.content,
							}}
						/>
						{/* {blog?.content.map((content, index) => (
							<p key={index}>{content}</p>
						))} */}
					</div>
					{/* Content  */}

					<div className="border-b border-t border-gray-500 border-opacity-10 py-10">
						<div className="space-y-1">
							{/* <h3 className="">
								Like Post ({postComments ? postComments?.length : 0})
							</h3> */}
							<div className="flex items-center gap-4">
								<span className="text-primary-900">({totalLikedPost})</span>{" "}
								<h3 className="">Like Post</h3>
								{!postLiked ? (
									<button onClick={likePostFunction}>
										<BiLike className="text-3xl" />
									</button>
								) : (
									<button>
										<BiSolidLike className="text-3xl text-primary-900" />
									</button>
								)}
							</div>
							<div className="border-b-4 border-primary-900 w-10 rounded" />
						</div>

						<CommentsTemp postComments={postComments} />
					</div>
					{/* <div className="pt-10 space-y-5 w-full max-w-xl">
						<div className="space-y-1">
							<h2 className="">Make a Comment</h2>
							<div className="border-b-4 border-primary-900 w-10 rounded" />
						</div>
						<p>
							Your email address will not be published. All fields are required.
						</p>
						<MakeComment postId={blog?.objectId} />
					</div> */}
				</div>

				{/* <div className="col-span-1"><CustomBtn>Hello</CustomBtn></div> */}
			</BlogLayout>
		</div>
	);
}

function BlogLayout({ children }) {
	return (
		<>
			<PageLayout>
				<div className="w-full max-w-screen-lg mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-1 gap-10 py-20">
						{children}
					</div>
				</div>
			</PageLayout>
		</>
	);
}

function MakeComment({ postId }) {
	const [formData, setFormData] = useState({
		name: "",
		emailAddress: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`${baseUrl}/classes/Comments`,
				{
					...formData,
					commentId: {
						__type: "Pointer",
						className: "Blog",
						objectId: postId,
					},
				},
				{
					headers: {
						"X-Parse-Application-Id": APP_ID,
						"X-Parse-REST-API-Key": REST_KEY,
						"Content-Type": "application/json",
					},
				}
			);
			// console.log("Comment posted successfully:", response.data);
			window.location.reload(); // Optionally, you can add logic to handle success, like clearing the form fields or showing a success message
		} catch (error) {
			console.error("Error posting comment:", error);
			// Optionally, you can add logic to handle errors, like showing an error message to the user
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="space-y-5">
				<CustomInput
					htmlFor="name"
					label=""
					full={true}
					name="name"
					type="text"
					value={formData.name}
					onChange={handleChange}
					placeholder="Name"
					required
				/>
				<CustomInput
					htmlFor="emailAddress"
					label=""
					full={true}
					name="emailAddress"
					type="email"
					value={formData.emailAddress}
					onChange={handleChange}
					placeholder="Email Address"
					required
				/>
				<textarea
					name="message"
					id="message"
					cols="10"
					rows="5"
					value={formData.message}
					onChange={handleChange}
					placeholder="Comment Here"
					className="w-full rounded-lg placeholder:text-placeholder border px-2 py-3 right-0 focus:right-0 focus:outline-none focus:border-primary-800 caret-[#54DF0A] overflow-ellipsis border-neutral-300"
					required></textarea>
				<div className="w-full lg:w-[40%]">
					<CustomBtn type="submit" full={true}>
						Make Comment
					</CustomBtn>
				</div>
			</form>
		</div>
	);
}
function CommentsTemp({ postComments }) {
	return (
		<>
			{postComments && (
				<div className="space-y-5 pt-5">
					{postComments.map((comment, index) => {
						return (
							<div key={index} className="flex items-center gap-4">
								<div>
									<div className=" bg-gray-500 w-16 h-16 rounded-full">
										<Image
											src={Avatar}
											alt=""
											className="w-full h-full object-cover rounded-full"
											width={200}
											height={200}
										/>
									</div>
								</div>

								<div>
									<div className="flex items-end gap-5">
										<p className="text-primary-900 font-bold">{comment.name}</p>
										<p className="text-sm text-primary-500">{comment.date}</p>
									</div>

									<p className="text-sm">{comment.message}</p>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</>
	);
}
