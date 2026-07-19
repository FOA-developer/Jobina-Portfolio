import Tag from './Tag';
import { Link } from 'react-router-dom';

const Card = ({ tags = [], title, src, description, period, link = '#' }) => (
  <Link to={link}>
    <article
      className="flex flex-col justify-between rounded-2xl  transition-shadow duration-200 hover:shadow-md  max-h-140"
      style={{
        background:   '#ffffff',
        border:       '1px solid var(--color-card-border)',
      minHeight:    '350px',
    }}>

    {/* Top section — tags + title + description */}
    <div className="flex flex-col gap-4">
      <img src={src} alt={title} loading="lazy" className="w-full h-60 rounded-t-lg" />

      <div className="flex flex-col gap-4 p-6 md:p-7">
        <span className="text-xs md:text-sm font-semibold tracking-wider text-text-main uppercase">
          {period}
        </span>
        <h3
          className="text-lg md:text-xl font-bold leading-snug"
          style={{ color: 'var(--color-text-header)' }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'var(--color-text-header-description)' }}
        >
          {description}
        </p>
        <h6 className="text-xs md:text-sm font-semibold text-text-main tracking-wider uppercase flex items-center gap-1 transition-opacity hover:opacity-70">
          Read the full story 
        </h6>
      </div>
    </div>
  </article>
</Link>
);

export default Card;
