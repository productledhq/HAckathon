# Product Insights & Feature Ideas

## Voice-Match Scoring (ICP 2.0)

### The Core Insight

**ICP scoring should detect AI slop patterns, not just topic relevance.**

Current thinking: "Does this content match our target audience?"

Better question: "Does this sound like Wes wrote it for our target audience?"

A LinkedIn post could be perfectly on-topic for B2B SaaS founders but still be garbage if it's full of corporate-speak, series-of-three constructions, and generic motivational fluff.

### Why This Matters

The Growth Super Agent's competitive advantage isn't just "we generate content about the right topics." It's "we generate content that sounds like it came from Wes, not from ChatGPT."

Voice match = brand consistency = trust = engagement.

### Measurable Violations

The writing voice guide contains specific, detectable patterns we can score against:

#### 1. Series-of-Three Constructions
**Pattern**: `(no|not just|it's about|from|whether it's) \w+(,| and) \w+(,| and) \w+`

**Examples**:
- "no strategy, no alignment, no results"
- "build trust, build value, build loyalty"
- "from A to B to C"

**Score Impact**: -10 points per occurrence

#### 2. Red Flag Words
**List**: delve, utilize, robust, synergy, paradigm, multifaceted, landscape, ecosystem (context-dependent), holistic, myriad, plethora, embark, foster, garner, moreover, furthermore, additionally

**Score Impact**: -5 points per red flag word

#### 3. Em Dash Abuse
**Metric**: Count `—` per paragraph

**Threshold**: Max 1 per paragraph

**Score Impact**: -3 points for each paragraph exceeding limit

#### 4. Hedge Stacking
**Patterns**:
- "could potentially"
- "might be argued that"
- "there are several factors"
- "it may be the case"

**Score Impact**: -8 points per hedge phrase

#### 5. Empty Motivational Closes
**Patterns**:
- "by embracing these principles"
- "the journey starts with"
- "well on your way"
- "take the first step"

**Score Impact**: -15 points (these kill credibility)

#### 6. Announcing Before Starting
**Patterns**:
- "Here's the truth:"
- "Let me unpack this"
- "In this post, I'll explore"
- "The answer is simple:"

**Score Impact**: -7 points per announcement phrase

#### 7. Generic AI Openings
**Patterns**:
- "In today's fast-paced world"
- "At the end of the day"
- "It's worth noting that"
- "Moving forward"

**Score Impact**: -12 points (instant AI tell)

#### 8. Exclamation Mark Overuse
**Threshold**: Max 1 per piece

**Score Impact**: -4 points per exclamation mark beyond first

#### 9. Consecutive Same-Word Starts
**Pattern**: 3+ consecutive sentences starting with "This", "It", "The", etc.

**Score Impact**: -5 points per violation

### Scoring Formula

```
Base ICP Score (0-100) = Audience Fit
Voice Penalty = Sum of all violations
Final ICP Score = Base Score - Voice Penalty

Minimum score: 0
```

### Example Scoring

**Bad LinkedIn Post**:
```
In today's fast-paced world, B2B SaaS companies need to leverage robust strategies
to foster engagement, build trust, and garner results. Here's the truth: it's not
just about features, but value, experience, and outcomes. By embracing these
principles, you'll be well on your way to success!
```

**Violations**:
- Generic AI opening ("In today's fast-paced world"): -12
- Red flag words (robust, leverage, foster, garner): -20
- Series-of-three ("engagement, trust, results"): -10
- Series-of-three ("features, value, experience, outcomes"): -10
- Announcing ("Here's the truth:"): -7
- Empty motivational close ("well on your way"): -15
- Exclamation mark: -4

**Total Penalty**: -78 points
**Final Score**: 22/100 (if base audience fit was 100)

---

**Good LinkedIn Post** (Wes Voice):
```
I spent $300,000 promoting a whitepaper.

Three weeks later, not a single lead converted.

That's when I realized most B2B companies are optimizing for the wrong metric.
They track downloads. They celebrate MQLs. But nobody asks: did the user
actually read it?

Sound familiar?
```

**Violations**: 0
**Final Score**: 100/100

### Implementation Phases

#### Phase 1: Detection (Backend)
Build regex patterns and word list matching for each violation type.

#### Phase 2: Scoring Algorithm (Backend)
Implement penalty calculation and final score computation.

#### Phase 3: UI Display (Frontend)
Show voice violations in the content editor:
- Highlight series-of-three in red
- Flag red flag words
- Show voice score alongside audience ICP score

#### Phase 4: AI Feedback Loop (Backend)
Feed violation data back into content generation prompts:
- "Previous draft had 3 series-of-three violations. Rewrite without them."
- Iterative improvement until voice score > 85

### Success Metrics

**Content Quality**:
- Average voice score > 85
- <5% of generated content needs manual voice cleanup

**User Confidence**:
- Approval rate increases (users trust AI-generated content)
- Time-to-publish decreases (less editing needed)

**Brand Consistency**:
- Published content maintains Wes's voice across all platforms
- Engagement metrics match or exceed manually-written content

### Technical Requirements

**Backend**:
- Pattern matching engine
- Scoring algorithm
- Violation highlighting API

**Frontend**:
- Voice score badge component
- Inline violation highlighting in editor
- "Fix voice issues" button (triggers AI rewrite)

**Data**:
- Voice violation logs
- Score distribution analytics
- Before/after improvement metrics

### Future Enhancements

**Voice Learning**:
- Train custom model on Wes's published content
- Detect subtle voice patterns beyond rule violations
- Personalized voice scoring (adapt as Wes's voice evolves)

**Competitor Benchmarking**:
- Compare generated content against competitor posts
- "This sounds like [generic SaaS marketer], not Wes"

**Multi-Voice Support**:
- If ProductLed expands beyond Wes's personal brand
- Support multiple voice profiles with different scoring rules

---

## Other Product Ideas

### Auto-Save with Conflict Resolution
Show users when multiple people edit the same content. Merge changes intelligently.

### Bundle-Based Publishing
Schedule entire podcast episode bundles at once. One click publishes LinkedIn post, newsletter, and blog article in sequence.

### ICP Score Trends
Track how ICP scores change over time. "Your content is getting more generic" alerts.

### Platform-Specific Optimization
Same core content, optimized formatting for each platform. LinkedIn gets short paragraphs, newsletter gets longer narrative.

### A/B Testing Hooks
Generate 3 different opening hooks for the same post. Let Wes pick the winner. Feed results back into AI.

---

**Last Updated**: February 17, 2026
**Status**: Voice-match scoring ready for backend implementation
