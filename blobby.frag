void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (fragCoord - iResolution.xy * .5) / iResolution.y;
    
    uv *= 1.0;
    //uv = fract(uv);
    
    uv.x += sin(iTime + uv.y*5.0)/20.0;
    uv.y += sin(iTime + uv.x*6.0) / 3.0;
    
    float distanceFromCenter = distance(vec2(0), uv) * 2.0;
    distanceFromCenter = smoothstep(1.0, 0.7, distanceFromCenter);
    
    fragColor = vec4(distanceFromCenter, distanceFromCenter, distanceFromCenter, 1.0);
}