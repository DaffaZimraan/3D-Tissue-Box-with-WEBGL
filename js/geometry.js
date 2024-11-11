const TissueBoxGeometry = {
    // Tissue Box Lid (Outer box's Top Face) with texture coordinates
    outerTop: {
        vertices: new Float32Array([
            // Top Length
            -0.5, -0.3, 0.3,  0.5, -0.3,  0.3,  0.5, -0.05, 0.3,
            -0.5, -0.3, 0.3,  0.5, -0.05, 0.3, -0.5, -0.05, 0.3,

            // Bottom Length
            -0.5,  0.3,  0.3, 0.5,  0.3,  0.3, 0.5,  0.05, 0.3,
            -0.5,  0.3,  0.3, 0.5,  0.05, 0.3,-0.5,  0.05, 0.3,

            // Left Width
            -0.5,  0.05, 0.3, -0.3,  0.05, 0.3, -0.3, -0.05, 0.3,
            -0.5,  0.05, 0.3, -0.3, -0.05, 0.3, -0.5, -0.05, 0.3,

            // Right Width
            0.5,  0.05, 0.3, 0.3,   0.05, 0.3, 0.3, -0.05, 0.3,
            0.5,  0.05, 0.3, 0.3,  -0.05, 0.3, 0.5, -0.05, 0.3
        ]),
        normals: new Float32Array([
            // Top Length
            0.0, 0.0, 1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0,
            // Bottom Length
            0.0, 0.0, 1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0,
            // Left Width
            0.0, 0.0, 1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0,
            // Right Width
            0.0, 0.0, 1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0
        ]),
        textureCoords: new Float32Array([
            // Top Length
            0.0, 0.0,  1.0, 0.0,  1.0, 1.0,
            0.0, 0.0,  1.0, 1.0,  0.0, 1.0,
            
            // Bottom Length
            0.0, 0.0,  1.0, 0.0,  1.0, 1.0,
            0.0, 0.0,  1.0, 1.0,  0.0, 1.0,
            
            // Left Width
            0.0, 0.0,  1.0, 0.0,  1.0, 1.0,
            0.0, 0.0,  1.0, 1.0,  0.0, 1.0,
            
            // Right Width
            0.0, 0.0,  1.0, 0.0,  1.0, 1.0,
            0.0, 0.0,  1.0, 1.0,  0.0, 1.0
        ])
    },

    outer: {
        vertices: new Float32Array([
            // Bottom face
            -0.5, -0.3, -0.3,  0.5, -0.3, -0.3,  0.5,  0.3, -0.3,
            -0.5, -0.3, -0.3,  0.5,  0.3, -0.3, -0.5,  0.3, -0.3,
            
            // Left face
            -0.5, -0.3, -0.3, -0.5,  0.3, -0.3, -0.5,  0.3,  0.3,
            -0.5, -0.3, -0.3, -0.5,  0.3,  0.3, -0.5, -0.3,  0.3,

            // Right face
            0.5, -0.3, -0.3,  0.5,  0.3, -0.3,  0.5,  0.3,  0.3,
            0.5, -0.3, -0.3,  0.5,  0.3,  0.3,  0.5, -0.3,  0.3,

            // Front Face
            -0.5,  0.3, -0.3,  0.5,  0.3, -0.3,  0.5,  0.3,  0.3,
            -0.5,  0.3, -0.3,  0.5,  0.3,  0.3, -0.5,  0.3,  0.3,

            // Back Face
            -0.5, -0.3, -0.3,  0.5, -0.3, -0.3,  0.5, -0.3,  0.3,
            -0.5, -0.3, -0.3,  0.5, -0.3,  0.3, -0.5, -0.3,  0.3
        ]),
        normals: new Float32Array([
            // Bottom face
            0.0, 0.0, -1.0,  0.0, 0.0, -1.0,  0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,  0.0, 0.0, -1.0,  0.0, 0.0, -1.0,
            // Left face
            -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
            -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
            // Right face
            1.0, 0.0, 0.0,  1.0, 0.0, 0.0,  1.0, 0.0, 0.0,
            1.0, 0.0, 0.0,  1.0, 0.0, 0.0,  1.0, 0.0, 0.0,
            // Front face
            0.0, 1.0, 0.0,  0.0, 1.0, 0.0,  0.0, 1.0, 0.0,
            0.0, 1.0, 0.0,  0.0, 1.0, 0.0,  0.0, 1.0, 0.0,
            // Back face
            0.0, -1.0, 0.0,  0.0, -1.0, 0.0,  0.0, -1.0, 0.0,
            0.0, -1.0, 0.0,  0.0, -1.0, 0.0,  0.0, -1.0, 0.0
        ])
    },

    // Dikarenakan vertices terlalu banyak, maka dilakukan kalkulasi pada geometri tisu agar kode terlihat singkat sebagai berikut:
    tissue: {
        vertices: (() => {
            const segments = 20; 
            const width = 0.5;   
            const length = 0.35; 
            const waveHeight = 0.035; 
            const waveFreq = 3;   
            
            const vertices = [];
            
            for (let i = 0; i < segments; i++) {
                for (let j = 0; j < segments; j++) {
                    const x1 = -width/2 + (width * i/segments);
                    const x2 = -width/2 + (width * (i+1)/segments);
                    const z1 = 0.2 + (length * j/segments);
                    const z2 = 0.2 + (length * (j+1)/segments);
                    
                    const y11 = waveHeight * Math.sin(x1 * waveFreq * Math.PI) * Math.sin(z1 * waveFreq * Math.PI);
                    const y12 = waveHeight * Math.sin(x1 * waveFreq * Math.PI) * Math.sin(z2 * waveFreq * Math.PI);
                    const y21 = waveHeight * Math.sin(x2 * waveFreq * Math.PI) * Math.sin(z1 * waveFreq * Math.PI);
                    const y22 = waveHeight * Math.sin(x2 * waveFreq * Math.PI) * Math.sin(z2 * waveFreq * Math.PI);
                    
                    vertices.push(
                        x1, y11, z1,
                        x2, y21, z1,
                        x1, y12, z2
                    );
                    
                    vertices.push(
                        x2, y21, z1,
                        x2, y22, z2,
                        x1, y12, z2
                    );
                }
            }
            
            return new Float32Array(vertices);
        })(),
        
        normals: (() => {
            const segments = 20;
            const normals = [];
            
            for (let i = 0; i < segments; i++) {
                for (let j = 0; j < segments; j++) {
                    for (let k = 0; k < 6; k++) { 
                        normals.push(
                            0.0 + Math.random() * 0.1 - 0.05,  
                            1.0,                               
                            0.0 + Math.random() * 0.1 - 0.05   
                        );
                    }
                }
            }
            
            return new Float32Array(normals);
        })()
    },

    inner: {
        vertices: new Float32Array([
        // Top Face
        -0.4, -0.2,   0.2,  0.4, -0.2,   0.2,  0.4,  0.2,  0.2,
        -0.4, -0.2,   0.2,  0.4,  0.2,   0.2, -0.4,  0.2,  0.2,
        
        // Bottom face
        -0.4, -0.2,  -0.28,  0.4, -0.2,  -0.28,  0.4,  0.2, -0.28,
        -0.4, -0.2,  -0.28,  0.4,  0.2,  -0.28, -0.4,  0.2, -0.28,

        // Left face
        -0.4, -0.2,   0.2, -0.4, -0.2,  -0.28, -0.4,  0.2, -0.28,  
        -0.4, -0.2,   0.2, -0.4,  0.2,  -0.28, -0.4,  0.2,  0.2, 

        // Right face
         0.4, -0.2,   0.2,  0.4, -0.2,  -0.28,  0.4,  0.2, -0.28,  
         0.4, -0.2,   0.2,  0.4,  0.2,  -0.28,  0.4,  0.2,  0.2,  

        // Front face
        -0.4, -0.2,   0.2,  0.4, -0.2,   0.2 ,  0.4, -0.2, -0.28,  
        -0.4, -0.2,   0.2,  0.4, -0.2,  -0.28, -0.4, -0.2, -0.28,  

        // Back face
        -0.4,  0.2,   0.2,  0.4,  0.2,   0.2 ,  0.4,  0.2, -0.28,
        -0.4,  0.2,   0.2,  0.4,  0.2,  -0.28, -0.4,  0.2, -0.28
    ]),
    normals: new Float32Array([
        // Top face
        0.0, 0.0,  1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0,
        0.0, 0.0,  1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0,
        // Bottom face
        0.0, 0.0, -1.0,  0.0, 0.0, -1.0,  0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,  0.0, 0.0, -1.0,  0.0, 0.0, -1.0,
        // Left face
        -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
        // Right face
        1.0, 0.0, 0.0,  1.0, 0.0, 0.0,  1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,  1.0, 0.0, 0.0,  1.0, 0.0, 0.0,
        // Front face
        0.0, 1.0, 0.0,  0.0, 1.0, 0.0,  0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,  0.0, 1.0, 0.0,  0.0, 1.0, 0.0,
        // Back face
        0.0, -1.0, 0.0,  0.0, -1.0, 0.0,  0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,  0.0, -1.0, 0.0,  0.0, -1.0, 0.0
    ])
}
};

const Colors = {
    outerBox: [0.2, 0.2, 0.2, 0.9],
    innerBox: [1.0, 1.0, 1.0, 1.0],
    tissue: [1.0, 1.0, 1.0, 1.0]
};