void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord - iResolution.xy * .5) / iResolution.y;
    float distanceFromCenter = distance(vec2(0), uv) * 2.0;
    distanceFromCenter = smoothstep(1.0, 0.7, distanceFromCenter);
    
    fragColor = vec4(distanceFromCenter, distanceFromCenter, distanceFromCenter, 1.0);
}