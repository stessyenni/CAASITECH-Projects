import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <img className='card-image' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAOVBMVEWVu9////+Rud75+/2Ltdy+1Ort8/
          mhwuKGstvp8PidwOGvy+bz9/uzzefJ2+7Y5fLS4fGpx+Xg6vU/X7DWAAAEuUlEQVR4nO2cbbOjIAyFNYIIIgr//8eutNe29k0JenR2+ny7O9PpWSQhCccWxY8f/wlUkLgx/
          nG0njlERnk5BK3rWuswSK8MnUYjCeP6uipnVLp3RpxBI1Gnn8TdRXaHLyMVzr5Xd8W6Y3ejaPU3eRHdisPkUdEvyYv0Ry0iqXqNvnER1SEKSa2TFzEHKCT/IXbfUfkDFCboGxXCBdLK/
          Tdh0fqGNH1l6aBrSD5VX1lCt6FIfMCRGpiwqUvXV5YdcAkXD7h3aJg8ajn6yrJFLSGtOoJfGWACefrKEiSQk2OugDKNYD7hsfDCZBpOErwCSoXma5H/DWsQ+qhLqmMeqSC5miRXX1lKiEDHF
          wgpadIrrTuYVM3OMmOegQgMfIEBoe8n8CfwaIHcajACieLT58HzCzz9UXf6YqHll1uYvu7sBWtBfIGYkr9hzRUiGtQ0scPYYQRyJx/A2QdXIEgeO0osbDbDPOxwwyPmWQI5Ry541jO2HqXv9BNWZiY
          EZcELCdd0dxROX9EwNqFtgAI5cYyL4YhKrgkrTKk1kZ6rYVn6T2DKbfFlAdE3xiKxfQ9wa0VipsHuwEjagAEzGJwLVAm50CKT9E1hQi7E5sAJsbpkADVLL6xtkEHt8CtruydYr/
          SqcJU1AGkFeEasCJRjAmRieQ2PXL+I+N6fWH+Ue5CmLybz5Ujpb7Y3sJ2VCnlrgYg+2TB1e7ewagm0OQoj69ikTd9IQr6pbYK8rRrFNrCWBvG4icZnet129X19qFBytoxaqvuK0Z9Vzo5PfF9b8Ljx/
          IMQ+1iEkhCmk24YnOyMeNxy9BBHWnrabTtSY1yYFdKVnHdq9MfsHxs5/0xwptlB4vit8o3bIyy5U8m82Z61LLZ+1EJ9MHRXX6Nz/F+9712sU5tGDMnP6diO0fpWI43R/e1j260hmYXKb2ifwzMGe7vQmuq
          tzMtrDN26l1400+skjfCyXy5n620M4LR6ilDpfhjpP70d8fqBTRQS+1pkGb2BwJzb12XyByLJM45EsiciTYZDYQ0hc2qY8soDj8w4yXFQrCPTlZky3+Bhs5Yw5/p/LVlHHu0cIpGQtQn315d1B8p7qSCVjM6Z75hOISOOxb6nyB8VW+D6OiZPIDvRIJJMhJ1o9i1k7vBLGkiMxJc/
          mRj2WwVp1MwRMShGYpQwBbINPKkwq9YcJ2MaTN8j5hyJMM8Szr0/D6ZboEHpK0uWQDI4gazxMC6ImXdRuCBmnsa4IGaGcaorIQeeo2HHodEznCESoUqFSM2ZZfJMgjw41sIMR3w6HA89puWcYLSeqIbkCiMRnl8g8CDhVYSglu7KkK5v/
          9HlIwxv1/kFAo9i1pBwz/ubbQSefgWxUcwQCKz4eTU/MlPzOvfTTxYKEm711S+bSrsMnwpR63YtrGvXZvo/iEgNdpd1rOygNnEikRDehY0bABucF9t5kKKJw2/3sGvn93BxkWiUDM8/
          dplGVQenmv3MhBTtZZ0LrLUctXW++OAC2lRk/Aov+7pauZhVVQ/ST58EMa5lQ6qTQx/0pyCvrA79IDtFzf7r9lEmFUZ530brYD/9UGw/ONe1XikzbtzDf+k06rw8PjGDirP93O6PHzz+AYEOPzhrb9KbAAAAAElFTkSuQmCC" alt="Profile picture" />
          <h2 className='card-title'>{props.name}</h2>
          <p className='card-text'>{props.intro}</p>
    </div>
  )
}

export default Card
