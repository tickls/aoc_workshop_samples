void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = ((fragCoord - iResolution.xy * 0.5) / iResolution.y) * 2.0;

    float distanceFromCenter = distance(vec2(0), uv);
    
    fragColor = vec4(distanceFromCenter, 0.0, 0.0, 1.0);
}