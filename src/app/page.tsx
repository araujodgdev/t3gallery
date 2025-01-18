const mockImages = [
  {
    "name": "evgeniya-pron-dFUIZPcQCUM-unsplash.jpg",
    "key": "uxL5QSsQ0DaR7VZ1oJH4I8WqQbP9NgehBEJxjFs1CStXcwOf",
    "customId": null,
    "url": "https://ip8qj2qupw.ufs.sh/f/uxL5QSsQ0DaR7VZ1oJH4I8WqQbP9NgehBEJxjFs1CStXcwOf",
    "size": 937765,
    "uploadedAt": "2025-01-18T17:00:20.000Z"
  },
  {
    "name": "tianlei-wu-_eG1p8Ksxpw-unsplash.jpg",
    "key": "uxL5QSsQ0DaRfr0GSZLhUC3i5kF42KTsbmDadePSvl9HxAOn",
    "customId": null,
    "url": "https://ip8qj2qupw.ufs.sh/f/uxL5QSsQ0DaRfr0GSZLhUC3i5kF42KTsbmDadePSvl9HxAOn",
    "size": 4016405,
    "uploadedAt": "2025-01-18T17:00:20.000Z"
  },
  {
    "name": "victor-oonk-Mk69XDUR7Vo-unsplash.jpg",
    "key": "uxL5QSsQ0DaRiFpcrHPjlDzbqOSneojM52aL6T8Q9vdtwZxK",
    "customId": null,
    "url": "https://ip8qj2qupw.ufs.sh/f/uxL5QSsQ0DaRiFpcrHPjlDzbqOSneojM52aL6T8Q9vdtwZxK",
    "size": 1345920,
    "uploadedAt": "2025-01-18T17:00:20.000Z"
  },
  {
    "name": "james-dimas-LPP-22vz5os-unsplash.jpg",
    "key": "uxL5QSsQ0DaRJJj2QE7i3PpToEhlZ1uVNCUqD4xvR0F9Lsjy",
    "customId": null,
    "url": "https://ip8qj2qupw.ufs.sh/f/uxL5QSsQ0DaRJJj2QE7i3PpToEhlZ1uVNCUqD4xvR0F9Lsjy",
    "size": 2674855,
    "uploadedAt": "2025-01-18T17:00:20.000Z"
  },
  {
    "name": "diego-marin-8i_pvt_j6D4-unsplash.jpg",
    "key": "uxL5QSsQ0DaRDH0a7m9YItbMgdJqsh183j9xVTEHyBKDaRnQ",
    "customId": null,
    "url": "https://ip8qj2qupw.ufs.sh/f/uxL5QSsQ0DaRDH0a7m9YItbMgdJqsh183j9xVTEHyBKDaRnQ",
    "size": 10152367,
    "uploadedAt": "2025-01-18T17:00:20.000Z"
  },
  {
    "name": "logan-weaver-lgnwvr-pQeJwAAqUaU-unsplash.jpg",
    "key": "uxL5QSsQ0DaRc18sAx2boAdvPrSG5k9n8wlQe7x1pEzyjV2I",
    "customId": null,
    "url": "https://ip8qj2qupw.ufs.sh/f/uxL5QSsQ0DaRc18sAx2boAdvPrSG5k9n8wlQe7x1pEzyjV2I",
    "size": 4360976,
    "uploadedAt": "2025-01-18T17:00:20.000Z"
  },
  {
    "name": "filip-kvasnak-UlbqFEDxE0I-unsplash.jpg",
    "key": "uxL5QSsQ0DaR1i5PKmOTzGaJQl2UOfLqwZn5XVsP3e7Rdy4b",
    "customId": null,
    "url": "https://ip8qj2qupw.ufs.sh/f/uxL5QSsQ0DaR1i5PKmOTzGaJQl2UOfLqwZn5XVsP3e7Rdy4b",
    "size": 1530815,
    "uploadedAt": "2025-01-18T17:00:19.000Z"
  }
]

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((img, i) => (<div key={i} className="w-48">
          <img src={img.url} />
        </div>))}
      </div>
    </main>
  )
} 