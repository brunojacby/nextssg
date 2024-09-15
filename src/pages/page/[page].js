import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Home({ products, currentPage, totalPages }) {
  return (
    <div className={styles.container}>
      <h1>Products for Sale</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <Image
              src={product.thumbnail}
              alt={product.category}
              width={300}
              height={200}
            />
            <h2 className={styles.title}>{product.title}</h2>
            <span>{product.availabilityStatus}</span>
            <span>{product.brand}</span>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        {currentPage > 1 && (
          <Link href={`/page/${currentPage - 1}`} passHref>
            <span>Previous</span>
          </Link>
        )}
        {currentPage < totalPages && (
          <Link href={`/page/${currentPage + 1}`} passHref>
            <span>Next</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const currentPage = context.params?.page
    ? parseInt(context.params.page, 10)
    : 1;
  const limit = 10; // Number of products per page

  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${
        (currentPage - 1) * limit
      }`
    );
    const data = await res.json();

    const totalPages = Math.ceil(data.total / limit); // Total pages based on API response

    const products = data.products;

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return {
      props: {
        products,
        currentPage,
        totalPages,
      },
      revalidate: 10, // Enable Incremental Static Regeneration (ISR)
    };
  } catch (error) {
    console.error("Error fetching products:", error);

    return {
      props: {
        products: [],
        currentPage,
        totalPages: 0,
      },
    };
  }
}

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=1"); // Fetch total number of products
  const data = await res.json();
  const totalPages = Math.ceil(data.total / 10); // Assuming 10 products per page

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: "blocking", // Allows new pages to be generated at request
  };
}
