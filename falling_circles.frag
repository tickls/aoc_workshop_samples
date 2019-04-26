float N21(vec2 p) {
    p = fract(p * vec2(237.74, 1201.17));
    p += dot(p, p + 85.51);

    return fract(p.x * p.y);
}

//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb( in vec3 c ){
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0,0.0,1.0);
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix( vec3(1.0), rgb, c.y);
}

vec3 drawCircle(vec2 uv, vec2 position, float radius) {
	float distanceToCenter = distance(uv, position);
    float value = smoothstep(radius, radius - 0.01, distanceToCenter);
    
    return vec3(value);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 originalUv = fragCoord/iResolution.y;
    
    originalUv.y += iTime/5.0;
    
    vec2 uv = originalUv * 4.0;
    vec2 tUv = fract(uv);
    
    float idx = floor(uv.x);
    float idy = floor(uv.y);
    
    vec2 circleCoordinate = vec2(0.5 + sin(iTime)/4.0);//0.5);
    
    vec3 col = drawCircle(tUv, circleCoordinate, 0.25);
    
    col = hsb2rgb(vec3(N21(vec2(idx, idy)), 1.0, col.x));
    
    // Output to screen
    fragColor = vec4(col,1.0);
}