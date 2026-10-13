import { useEffect, useRef } from 'react';

declare global { interface Window { twttr?: any } }

export default function TweetEmbed({ link }: { link: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const loadedId = useRef<string | null>(null);

  useEffect(() => {
    const id = link.match(/(?:status|statuses)\/(\d+)/)?.[1];
    if (!id || !ref.current || loadedId.current === id) return;

    loadedId.current = id;
    ref.current.innerHTML = '';

    const render = () => {
      if (ref.current) {
        window.twttr.widgets.createTweet(id, ref.current, { theme: 'dark' });
      }
    };

    if (window.twttr?.widgets?.createTweet) {
      render();
    } else {
      document.addEventListener('lazyLoadTwttr', render);
    }

    if (window.twttr && !window.twttr._hooked) {
      window.twttr._hooked = true;
      window.twttr.ready(() => document.dispatchEvent(new Event('lazyLoadTwttr')));
    }
  }, [link]);

  return <div className='' ref={ref} />;
}

export function YtEmbed({link}:{link: string}){
    const watchId:string  = link.split('=')[1];
    const embedLink: string = `https://www.youtube.com/embed/${watchId}` 
    return(
        <iframe className="w-full h-full block" src={embedLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    );
}

export function DocOrLink({link}:{link: string}){
    return (
        <a className="text-blue-500" href={link}>{link}</a>

    );
}

