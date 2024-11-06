const pokerCards = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
const suits = ['♠', '♣', '♥', '♦'];

const allCards = pokerCards.flatMap(card => suits.map(suit => card + suit));

// Function to shuffle the deck
function shuffleDeck(deck: string[]): string[] {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// Function to pick 5 random unique cards
function pickRandomCards(deck: string[], count: number): string[] {
    return deck.slice(0, count);
}

// Shuffle the deck
const shuffledDeck = shuffleDeck([...allCards]);

// Pick 5 random unique cards
const pickedCards = pickRandomCards(shuffledDeck, 5);

console.log('Picked Cards:', pickedCards);

// Remaining cards in the deck
const remainingCards = shuffledDeck.slice(5);

// Function to calculate the best possible hand from the remaining cards
function calculateBestHand(remainingCards: string[]): string[] {
    // Placeholder for the best hand calculation logic
    // This would involve poker hand ranking logic
    return [];
}