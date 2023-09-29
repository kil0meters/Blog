+++
title = "Unembed"
date = "2018-06-12"
+++

I created Unembed as a way to easily embed posts on social media to my website.
Here is an example of it in action:

<div style='border: 1px solid #ddd;border-radius: 2px;margin:1.6rem 0 1rem 0;padding:0.6rem 1.5rem 0.6rem 1.5rem;max-width:600px;font-size: 1.1rem;margin: 0 auto;'>
  <div>
    <span>jack</span><br />
    <a href='https://twitter.com/jack' style='color: #555;font-size: 1.0rem;'>@jack</a>
  </div>
  <div style='margin: 1rem 0;'>just setting up my twttr</div>
  <span style='color: #555;font-size: 0.9rem;'>2006-03-21</span>
  <a style='font-size: 0.9rem;text-align:right' href='https://twitter.com/jack/status/20'> View on Twitter</a>
</div>

It's designed to be super lightweight in accordance with the rest of my website,
so it has no images or JavaScript. Most importantly, it loads no data directly
from any external websites. That tweet is approximately 500 bytes; in
comparrision, using the standard Twitter embedding widget uses 110 KB.
That's a **95% reduction!**

Unembed supports other websites as well. For now it only works on Twitter
and Reddit.

Here is an example for Reddit (120KB9-> 600 bytes):

<div style="border: 1px solid #ddd;border-radius: 2px;padding:0.6rem 1.5rem 0rem 1.5rem;max-width:600px;font-size: 0.9rem;margin: 0 auto;">
  <div>
    <div>
      <a href="https://reddit.com/u/charlieb" style="margin: 0 1rem 0 0;color:#555">u/charlieb</a><span style="margin: 0 1rem 0 0;color: #555">2 points</span><span style="margin: 0 1rem 0 0;color: #555">2005-12-12</span><a style="color: #555" href="https://reddit.com/r/reddit.com/comments/17913/reddit_now_supports_comments/c51/">View on reddit</a>
    </div>
    <div><p>There&#39;s nothing like simplicity and not following the crowd. I for one welcome our new comment spam overlords. Oh and by the way;
1) Come up with a great simple idea
2) Wait for a degree of popularity and media attention
3) Add unnecessary features
4) Profit.
Is this what you want?</p>
</div>
  </div>
  <div style="border-top: 1px solid #ddd; margin: 0 -1.5rem;padding: 10px 10px;background-color:#eee;">
    <a href="https://reddit.com/r/reddit.com/comments/17913/reddit_now_supports_comments/">Reddit now supports comments</a><a href="https://reddit.com/r/reddit.com" style="margin: 0 0 0 1rem;font-size:0.8rem; color: #555;">r/reddit.com</a><br />
    <a href="https://reddit.com/u/Nutshapio" style="margin: 0 1rem 0 0;font-size:0.8rem; color: #555;">u/Nutshapio</a><span style="font-size:0.8rem;color:#555;">2005-12-12</span>
  </div>
</div>

## Info about the project

- It's written in Rust.
- It's MIT licensed.
- It only works on this website theme (although it would be pretty trivial to implement a generic theme for it).
- It's repository is [here](https://gitlab.com/kilometers/unembed)
