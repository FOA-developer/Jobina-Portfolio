import Tag from './Tag';
import { Link } from 'react-router-dom';

const Card = ({ tags = [], title, src, description, period, link = '#' }) => (
  <article
    className="flex flex-col justify-between rounded-2xl p-6 md:p-7 transition-shadow duration-200 hover:shadow-md"
    style={{
      background:   '#ffffff',
      border:       '1px solid var(--color-card-border)',
      minHeight:    '350px',
    }}
  >
    {/* Top section — tags + title + description */}
    <div className="flex flex-col gap-4">
      <img src={src} alt={title} className="w-full h-auto rounded-lg" />

      {/* Title */}
      <span className="text-xs md:text-sm font-semibold tracking-wider text-text-main uppercase">
        {period}
      </span>
      <h3
        className="text-lg md:text-xl font-bold leading-snug"
        style={{ color: 'var(--color-text-header)' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: 'var(--color-text-header-description)' }}
      >
        {description}
      </p>
    
      <div className="flex flex-row justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </div>
      <Link to={link}>
        <h6 className="text-xs font-semibold tracking-wider uppercase flex items-center gap-1 transition-opacity hover:opacity-70">
          Read the full story 
        </h6>
      </Link>
    </div>
    
  </article>
);

export default Card;
