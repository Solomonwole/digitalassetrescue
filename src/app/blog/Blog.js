"use client";
import React, { useEffect, useState } from "react";
import {
	APP_ID,
	REST_KEY,
	baseUrl,
	BlogTemplate,
} from "../components/home/Blog";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { PageLayout } from "../layout/pageLayout";
import { Preloader } from "../../../public/page";

function Blog() {
	const [blogContents, setBlogContents] = useState([]);
	const [fetching, setFetching] = useState(true);

	useEffect(() => {
		const fetchBlogPosts = async () => {
			let config = {
				method: "get",
				maxBodyLength: Infinity,
				url: `${baseUrl}/classes/ReBlog`,
				headers: {
					"X-Parse-Application-Id": APP_ID,
					"X-Parse-REST-API-Key": REST_KEY,
				},
			};

			axios
				.request(config)
				.then((response) => {
					const res = response.data.results;
					const sortedPosts = res.sort(
						(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
					);
					setBlogContents(sortedPosts);
					setFetching(false);
				})
				.catch((error) => {
					console.log(error);
					setFetching(false);
				});
		};
		fetchBlogPosts();
	}, []);

	if (fetching) {
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
	return (
		<>
			<div className="blog-bg h-[20vh] lg:min-h-[40vh] bg-primary-900 w-full flex flex-col gap-3 lg:gap-10 items-center justify-center">
				<div className="w-full lg:w-[80%]">
					<h1 className="text-white text-center text-3xl lg:text-5xl font-bold">
						Blog
					</h1>
				</div>

				<nav className="flex" aria-label="Breadcrumb">
					<ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
						<li className="inline-flex items-center">
							<a
								href="/"
								className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white">
								<svg
									className="w-3 h-3 me-2.5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
								</svg>
								Home
							</a>
						</li>
						<li>
							<div className="flex items-center">
								<svg
									className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
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
									className="ms-1 text-sm font-medium text-gray-400 hover:text-white md:ms-2">
									Blog
								</Link>
							</div>
						</li>
					</ol>
				</nav>
			</div>
			<PageLayout>
				<div className="py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
					{blogContents.map((item, index) => (
						<BlogTemplate key={index} item={item} />
					))}
				</div>
			</PageLayout>
		</>
	);
}

export default Blog;
