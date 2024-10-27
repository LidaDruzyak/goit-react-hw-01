import s from './Profile.module.css';
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.container}>
      <div>
        <img
          src={image}
          alt={name}
          width="200"
          height="200"
          className={s.img}
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.profList}>
        <li className={s.profItem}>
          <span className={s.subtitle}>Followers</span>
          <span className={s.score}>{stats.followers}</span>
        </li>
        <li className={s.profItem}>
          <span className={s.subtitle}>Views</span>
          <span className={s.score}>{stats.views}</span>
        </li>
        <li className={s.profItem}>
          <span className={s.subtitle}>Likes</span>
          <span className={s.score}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
