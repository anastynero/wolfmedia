import styles from './SocialMedia.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {vk, ok, facebook, twitter} from './../../images';

export default function SocialMedia(){
    const icons = [
        {title: "Вконтакте", src: vk, href: "/"},
        {title: "Одноклассники", src: ok, href: "/"},
        {title: "Фейсбук", src: facebook, href: "/"},
        {title: "Твиттер", src: twitter, href: "/"}
    ]
    return(
        <div className={styles["social-media"]}>
            {icons.map((item, index)=> (
                <Link href={item.href} key={index}>
                    <Image
                    src={item.src}
                    alt={item.title}
                    width={24}
                    height={24}
                    className={styles.image}
                    />
                </Link>
            ))}
            </div>
    );
}