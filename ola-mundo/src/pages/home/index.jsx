import styles from './home.module.css';
import Banner from "components/banner";
import posts from 'assets/json/post.json';
import Post from 'components/Post';

export default function Home() {
    return (
        <main>
            <Banner />
            <ul className = { styles.posts }>
                { posts.map( ( post ) => (
                    <li key = { post.id }>
                        <Post post = { post } />
                    </li>
                ) ) }
            </ul>
        </main>
    );
}