import styles from './home.module.css';
import posts from 'assets/json/post.json';
import Post from 'components/Post';

export default function Home() {
    return (

        <ul className = { styles.posts }>
            { posts.map( ( post ) => (
                <li key = { post.id }>
                    <Post post = { post } />
                </li>
            ) ) }
        </ul>
    );
}