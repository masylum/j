function j(){var a=[],b=0,c="",d=[],e="\033[3",f="\n";return function g(h){h?(a=
a.concat(h),b++):(h=new Date,a.map(function(a){a.call(g,function(a){if(!a)try{
throw Error()}catch(b){d.push(e+"1mFailure:"+b.stack.split(f)[3]+e+"9m")}c+=e+(a
?"2m✓":"1m✗")})}),console.log([c,e+"9m"+(new Date-h)+"ms",b+" tests, "+c.length+
" assertions, "+d.length+" failures",d.join(f)].join(f)))}}
