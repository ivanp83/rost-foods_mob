export default async function redirect(context: any) {
  const userAgent = context.req.headers["user-agent"];
  let isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  if (!isMobile) {
    context.res.writeHead(302, { Location: process.env.NEXT_PUBLIC_DOMAIN });
    context.res.end();
  }
}
