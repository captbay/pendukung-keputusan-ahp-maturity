import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL("/", request.url));
  const response = NextResponse.next();

  const userCookie = request.cookies.get("user");
  if(!userCookie){
    return NextResponse.redirect(new URL("/", request.url));
  }

  // take the url inserted
  const url = new URL(request.url);

  // take the path from the url
  const path = url.pathname;

  const user = JSON.parse(userCookie.value);
  console.log(user);
  if(user.jabatan === "admin"){
    if(!['/dashboard-admin', '/result-recap'].includes(path)){
      return NextResponse.redirect(new URL("/dashboard-admin", request.url));
    }
  } else if(user.jabatan == "user"){
    if(!['/dashboard', '/ahp', '/maturity'].includes(path)){
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else{
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/ahp', '/maturity', '/dashboard-admin', '/result-recap'],
}