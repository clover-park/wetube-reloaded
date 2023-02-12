#Wetube reloaded

_global router_
/ -> home
/join -> 회원가입
/login -> login
/search -> search

_users router_
/users/:id -> see profile
/users/edit -> edit my profile
/users/delete -> delete my profile
/users/logout -> logout

_video router_
/videos/:id -> watch video
/videos/:id/edit -> edit video
/videos/:id/delete -> delete video
/videos/upload -> upload video
